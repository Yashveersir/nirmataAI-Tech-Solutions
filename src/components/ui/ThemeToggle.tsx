"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative rounded-full border-border/50 bg-background/50 hover:bg-muted/50 backdrop-blur-md shadow-[0_0_10px_rgba(var(--color-primary),0.05)] hover:shadow-[0_0_15px_rgba(var(--color-primary),0.15)] transition-all duration-300 overflow-hidden group"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      <Sun className="size-[1.2rem] rotate-0 scale-100 transition-transform duration-500 ease-in-out dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-transform duration-500 ease-in-out dark:rotate-0 dark:scale-100 text-primary group-hover:drop-shadow-[0_0_5px_rgba(var(--color-primary),0.5)]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
