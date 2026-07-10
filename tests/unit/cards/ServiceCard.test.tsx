import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ServiceCard } from "@/components/cards/ServiceCard";
import type { Service } from "@/types";

const mockService: Service = {
  id: "test-service",
  slug: "test-service",
  title: "Test Service",
  shortDescription: "A short description for testing.",
  description: "A longer description for testing purposes.",
  features: ["Feature 1", "Feature 2"],
  technologies: ["Tech 1", "Tech 2"],
  benefits: ["Benefit 1"],
  faq: [{ question: "FAQ?", answer: "Answer." }],
};

describe("ServiceCard", () => {
  it("renders the service title", () => {
    render(<ServiceCard service={mockService} />);
    expect(screen.getByText("Test Service")).toBeInTheDocument();
  });

  it("renders the short description", () => {
    render(<ServiceCard service={mockService} />);
    expect(
      screen.getByText("A short description for testing."),
    ).toBeInTheDocument();
  });

  it("renders a 'Learn more' link to the service detail page", () => {
    render(<ServiceCard service={mockService} />);
    const link = screen.getByRole("link", { name: /learn more/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/services/test-service");
  });
});
