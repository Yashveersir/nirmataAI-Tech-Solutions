import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/sections/Hero";

describe("Hero", () => {
  it("renders the section with aria-label", () => {
    render(<Hero />);
    expect(screen.getByRole("region", { name: /hero/i })).toBeInTheDocument();
  });

  it("renders the main heading", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { level: 1, name: /build intelligent digital products/i }),
    ).toBeInTheDocument();
  });

  it("renders the tagline paragraph", () => {
    render(<Hero />);
    expect(
      screen.getByText(/ai-powered software, modern web platforms/i),
    ).toBeInTheDocument();
  });

  it("renders a 'Book a Consultation' CTA link", () => {
    render(<Hero />);
    const cta = screen.getByRole("link", { name: /book a consultation/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute("href", "/contact");
  });

  it("renders an 'Explore Services' link", () => {
    render(<Hero />);
    const explore = screen.getByRole("link", { name: /explore services/i });
    expect(explore).toBeInTheDocument();
    expect(explore).toHaveAttribute("href", "/services");
  });
});
