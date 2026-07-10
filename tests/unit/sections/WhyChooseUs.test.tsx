import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

describe("WhyChooseUs", () => {
  it("renders the section heading", () => {
    render(<WhyChooseUs />);
    expect(
      screen.getByRole("heading", { name: /why choose nirmata/i }),
    ).toBeInTheDocument();
  });

  it("renders all four value cards", () => {
    render(<WhyChooseUs />);
    expect(screen.getByText("Innovation First")).toBeInTheDocument();
    expect(screen.getByText("Quality & Security")).toBeInTheDocument();
    expect(screen.getByText("Radical Transparency")).toBeInTheDocument();
    expect(screen.getByText("Client Success")).toBeInTheDocument();
  });

  it("renders descriptions for each value", () => {
    render(<WhyChooseUs />);
    expect(
      screen.getByText(/we adopt modern tools and ai thoughtfully/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/every line of code is written with testing/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/clear roadmaps, honest estimates/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/we measure our success by the outcomes/i),
    ).toBeInTheDocument();
  });
});
