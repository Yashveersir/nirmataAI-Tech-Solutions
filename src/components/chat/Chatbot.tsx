"use client";

import { useState, useRef, useEffect, useCallback, FormEvent } from "react";
import { X, Send, Bot, Loader2, Sparkles } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "What services do you offer?",
  "How can I start a project?",
  "What's your pricing?",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Auto-scroll to bottom on new messages / loading state change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Cancel any in-flight request when component unmounts
  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;
      setError(null);

      const userMsg: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        content: text.trim(),
      };

      const allMessages = [...messages, userMsg];
      setMessages(allMessages);
      setInput("");
      setIsLoading(true);

      // Placeholder for streaming assistant reply
      const assistantId = `assistant-${Date.now()}`;
      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: "assistant", content: "" },
      ]);

      // Abort any previous request
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: abortControllerRef.current.signal,
          body: JSON.stringify({
            messages: allMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!res.ok) {
          const errText = await res.text();
          throw new Error(errText || `HTTP ${res.status}`);
        }

        const reader = res.body?.getReader();
        if (!reader) throw new Error("No response body");

        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          accumulated += chunk;

          // Update the assistant message in-place for streaming effect
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: accumulated } : m
            )
          );
        }

        // Final decode flush
        const remaining = decoder.decode();
        if (remaining) {
          accumulated += remaining;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: accumulated } : m
            )
          );
        }

        // If we got empty content, show a fallback
        if (!accumulated.trim()) {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? {
                    ...m,
                    content:
                      "I'm sorry, I couldn't generate a response. Please try again.",
                  }
                : m
            )
          );
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;

        console.error("[Chatbot] fetch error:", err);
        const errorMessage =
          "Something went wrong. Please try again or reach us at info@nirmataai.site.";

        setError(errorMessage);
        // Replace the empty placeholder with an error message
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: errorMessage } : m
          )
        );
      } finally {
        setIsLoading(false);
        abortControllerRef.current = null;
      }
    },
    [messages, isLoading]
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      sendMessage(input);
    },
    [input, sendMessage]
  );

  const handleSuggestion = useCallback(
    (q: string) => {
      sendMessage(q);
    },
    [sendMessage]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="fixed bottom-6 right-24 z-50 flex flex-col items-end sm:bottom-8 sm:right-28">
      {/* Chat Window */}
      {isOpen && (
        <div
          className="mb-4 flex h-[520px] w-[340px] flex-col overflow-hidden rounded-2xl border border-border/60 bg-card sm:w-[380px]"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.22)" }}
          role="dialog"
          aria-label="NirmataAI chat assistant"
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary-foreground/20">
                <Sparkles className="size-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">NirmataAI</p>
                <p className="text-[10px] opacity-75">AI Assistant · Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 transition-colors hover:bg-primary-foreground/20"
              aria-label="Close chat"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4"
            aria-live="polite"
            aria-atomic="false"
          >
            {/* Empty state with suggestions */}
            {messages.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center gap-3 px-2 text-center text-muted-foreground">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                  <Sparkles className="size-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Hi, I&apos;m NirmataAI!
                  </p>
                  <p className="mt-1 text-xs leading-relaxed">
                    Ask me anything about our services, pricing, or how we can
                    help your business.
                  </p>
                </div>
                <div className="mt-1 flex w-full flex-col gap-2">
                  {SUGGESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSuggestion(q)}
                      disabled={isLoading}
                      className="rounded-lg border border-border/70 px-3 py-2 text-left text-xs transition-colors hover:border-primary/30 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message bubbles */}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "assistant" && (
                  <div className="mr-2 mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    <Bot className="size-3.5 text-primary" aria-hidden="true" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : "rounded-bl-sm bg-muted text-foreground"
                  }`}
                >
                  {m.content || (
                    <span className="flex items-center gap-1.5 italic opacity-60">
                      <Loader2 className="size-3 animate-spin" />
                      Thinking…
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Error banner */}
            {error && (
              <p className="text-center text-xs text-red-500">{error}</p>
            )}

            <div ref={messagesEndRef} aria-hidden="true" />
          </div>

          {/* Input */}
          <div className="shrink-0 border-t border-border/60 bg-background px-3 py-3">
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2"
              aria-label="Chat input"
            >
              <input
                id="chat-input"
                type="text"
                className="flex-1 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-60"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask NirmataAI anything…"
                disabled={isLoading}
                autoComplete="off"
                maxLength={500}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button — pill when closed, X button when open */}
      {isOpen ? (
        <button
          onClick={() => setIsOpen(false)}
          className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 active:scale-95"
          aria-label="Close NirmataAI chat"
          aria-expanded={true}
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.22)" }}
        >
          <X className="size-5" />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 rounded-full bg-primary py-3 pl-3 pr-5 text-primary-foreground shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
          aria-label="Open NirmataAI chat"
          aria-expanded={false}
          style={{ boxShadow: "0 4px 28px rgba(0,0,0,0.25)" }}
        >
          {/* Bot avatar with pulse ring */}
          <span className="relative flex shrink-0 size-9 items-center justify-center rounded-full bg-primary-foreground/20">
            <Bot className="size-5" aria-hidden="true" />
            {/* Live online pulse dot */}
            <span className="absolute -top-0.5 -right-0.5 flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-green-400 border-2 border-primary" />
            </span>
          </span>

          {/* Label */}
          <span className="flex flex-col items-start leading-tight">
            <span className="text-xs font-bold tracking-wide">NirmataAI</span>
            <span className="text-[10px] opacity-80">Ask me anything ✦</span>
          </span>
        </button>
      )}
    </div>
  );
}
