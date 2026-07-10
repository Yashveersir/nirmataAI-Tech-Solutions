import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

describe("ServicesGrid", () => {
  it("renders the section heading", () => {
    render(<ServicesGrid />);
    expect(
      screen.getByRole("heading", { name: /our services/i }),
    ).toBeInTheDocument();
  });

  it("renders all six service cards", () => {
    render(<ServicesGrid />);
    expect(screen.getByText("Web Development")).toBeInTheDocument();
    expect(screen.getByText("AI Solutions")).toBeInTheDocument();
    expect(screen.getByText("Custom Software")).toBeInTheDocument();
    expect(screen.getByText("Cloud & DevOps")).toBeInTheDocument();
    expect(screen.getByText("UI/UX Design")).toBeInTheDocument();
    expect(screen.getByText("Mobile Development")).toBeInTheDocument();
  });

  it("renders a 'Learn more' link for each service", () => {
    render(<ServicesGrid />);
    const learnMoreLinks = screen.getAllByRole("link", { name: /learn more/i });
    expect(learnMoreLinks).toHaveLength(6);
  });
});
