import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AISolutionsTeaser } from "@/components/sections/AISolutionsTeaser";

describe("AISolutionsTeaser", () => {
  it("renders the section heading", () => {
    render(<AISolutionsTeaser />);
    expect(
      screen.getByRole("heading", { name: /ai solutions/i }),
    ).toBeInTheDocument();
  });

  it("renders all three AI solution cards", () => {
    render(<AISolutionsTeaser />);
    expect(screen.getByText("AI Chatbots")).toBeInTheDocument();
    expect(screen.getByText("Generative AI")).toBeInTheDocument();
    expect(screen.getByText("RAG Applications")).toBeInTheDocument();
  });

  it("renders an 'Explore AI Solutions' link", () => {
    render(<AISolutionsTeaser />);
    const explore = screen.getByRole("link", { name: /explore ai solutions/i });
    expect(explore).toBeInTheDocument();
    expect(explore).toHaveAttribute("href", "/ai-solutions");
  });
});
