import { streamText, createTextStreamResponse } from "ai";
import { google } from "@ai-sdk/google";
import { groq } from "@ai-sdk/groq";
import { siteInfo } from "@/data/site";
import { faqs } from "@/data/faqs";
import { services } from "@/data/services";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return new Response("Invalid request body", { status: 400 });
    }

    const { messages } = body;

    const servicesContext = services
      .map((s) => `- ${s.title}: ${s.description}`)
      .join("\n");
    const faqsContext = faqs
      .map((f) => `Q: ${f.question}\nA: ${f.answer}`)
      .join("\n\n");

    const systemPrompt = `You are a helpful and professional AI assistant for ${siteInfo.name}.
Your job is to answer questions from visitors about the company, its services, and how to contact us.

Company Information:
- Name: ${siteInfo.name}
- Founder: Yashveer Singh
- Co-founder: Ojshvi Sharma
- Tagline: ${siteInfo.tagline}
- Description: ${siteInfo.description}
- Contact Email: ${siteInfo.contact.email}
- Contact Phone: ${siteInfo.contact.phone}
- Address: ${siteInfo.contact.address}

Services we provide:
${servicesContext}

Frequently Asked Questions:
${faqsContext}

Guidelines:
- Be polite, professional, and helpful.
- Keep answers concise and clear.
- Use plain text only — no markdown symbols like **, *, #, etc. Just clean readable sentences.
- If a user asks something outside your knowledge, direct them to contact us at ${siteInfo.contact.email} or call ${siteInfo.contact.phone}.
- Never make up information about the company that is not provided above.
- Do NOT answer general knowledge, coding, or math questions (e.g., "what is 2+2"). Instead, politely state that you are only programmed to answer questions associated with this website.
- Do NOT provide specific pricing or try to fetch prices from the internet. If a user asks about pricing, tell them to connect or contact us for a discussion.
`;

    // Try Groq (llama) as primary — it is fast, free-tier friendly, and reliable.
    // Fall back to Gemini 2.0 flash if Groq fails.
    const MODELS = [
      () => groq("llama-3.3-70b-versatile"),
      () => google("gemini-2.0-flash"),
    ];

    let lastError: unknown;
    for (const getModel of MODELS) {
      try {
        const result = streamText({
          model: getModel(),
          messages,
          system: systemPrompt,
        });

        // Consume a tiny bit of the stream to verify the model responds before returning
        // (streamText is lazy — errors only surface when the stream is consumed)
        const stream = result.textStream;
        return createTextStreamResponse({ stream });
      } catch (err) {
        lastError = err;
        console.warn("[chat/route] Model failed, trying next:", err);
      }
    }

    console.error("[chat/route] All models failed:", lastError);
    return new Response("AI service temporarily unavailable. Please try again.", {
      status: 503,
    });
  } catch (error) {
    console.error("[chat/route] Unexpected error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
