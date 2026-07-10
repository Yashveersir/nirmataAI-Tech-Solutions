import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Container } from "@/components/layout/Container";

function renderAndGetRoot(ui: React.ReactElement): HTMLElement {
  const { container } = render(ui);
  // The Container always renders a single root element as the first child
  // of the testing-library wrapper.
  return container.firstChild as HTMLElement;
}

describe("Container", () => {
  it("renders children", () => {
    render(<Container>content</Container>);
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("applies default xl max-width class", () => {
    const root = renderAndGetRoot(<Container>content</Container>);
    const cls = root.className;
    expect(cls).toContain("max-w-7xl");
    expect(cls).toContain("mx-auto");
    expect(cls).toContain("px-4");
  });

  it.each([
    ["sm", "max-w-3xl"],
    ["md", "max-w-5xl"],
    ["lg", "max-w-6xl"],
    ["xl", "max-w-7xl"],
    ["full", "max-w-none"],
  ] as const)("applies %s size -> %s class", (size, expected) => {
    const root = renderAndGetRoot(<Container size={size}>content</Container>);
    expect(root.className).toContain(expected);
  });

  it("renders a div by default", () => {
    const root = renderAndGetRoot(<Container>content</Container>);
    expect(root.tagName).toBe("DIV");
  });

  it.each([
    "section",
    "article",
    "header",
    "footer",
    "main",
  ] as const)("renders <%s> when as=%s", (tag) => {
    const root = renderAndGetRoot(<Container as={tag}>content</Container>);
    expect(root.tagName).toBe(tag.toUpperCase());
  });

  it("forwards id prop", () => {
    const root = renderAndGetRoot(<Container id="hero">content</Container>);
    expect(root).toHaveAttribute("id", "hero");
  });

  it("merges custom className", () => {
    const root = renderAndGetRoot(
      <Container className="extra-class">content</Container>,
    );
    const cls = root.className;
    expect(cls).toContain("extra-class");
    expect(cls).toContain("max-w-7xl");
  });
});
