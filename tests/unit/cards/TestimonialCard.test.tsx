import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import type { Testimonial } from "@/types";

const mockTestimonial: Testimonial = {
  id: "t-test",
  quote: "This is an amazing testimonial quote for testing.",
  author: "John Doe",
  role: "CEO",
  company: "Test Corp",
};

describe("TestimonialCard", () => {
  it("renders the testimonial quote", () => {
    render(<TestimonialCard testimonial={mockTestimonial} />);
    expect(
      screen.getByText(/this is an amazing testimonial quote/i),
    ).toBeInTheDocument();
  });

  it("renders the author name", () => {
    render(<TestimonialCard testimonial={mockTestimonial} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("renders the author role and company", () => {
    render(<TestimonialCard testimonial={mockTestimonial} />);
    expect(screen.getByText("CEO, Test Corp")).toBeInTheDocument();
  });

  it("renders a blockquote element", () => {
    const { container } = render(
      <TestimonialCard testimonial={mockTestimonial} />,
    );
    expect(container.querySelector("blockquote")).toBeInTheDocument();
  });

  it("renders a figcaption with attribution", () => {
    const { container } = render(
      <TestimonialCard testimonial={mockTestimonial} />,
    );
    expect(container.querySelector("figcaption")).toBeInTheDocument();
  });
});
