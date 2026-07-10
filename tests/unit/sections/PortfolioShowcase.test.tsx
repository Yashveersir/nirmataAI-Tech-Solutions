import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase";

describe("PortfolioShowcase", () => {
  it("renders the section heading", () => {
    render(<PortfolioShowcase />);
    expect(
      screen.getByRole("heading", { name: /featured work/i }),
    ).toBeInTheDocument();
  });

  it("renders all three project cards with titles", () => {
    render(<PortfolioShowcase />);
    expect(screen.getByText("Helio Finance Platform")).toBeInTheDocument();
    expect(screen.getByText("Neuron Support Copilot")).toBeInTheDocument();
    expect(screen.getByText("Atlas Internal Platform")).toBeInTheDocument();
  });

  it("renders a 'View All Projects' link", () => {
    render(<PortfolioShowcase />);
    const viewAll = screen.getByRole("link", { name: /view all projects/i });
    expect(viewAll).toBeInTheDocument();
    expect(viewAll).toHaveAttribute("href", "/portfolio");
  });
});
