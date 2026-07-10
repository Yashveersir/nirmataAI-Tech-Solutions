import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/layout/Header";
import { primaryNavLinks, headerCta } from "@/data/navigation";

describe("Header", () => {
  it("renders a <header> landmark", () => {
    render(<Header links={primaryNavLinks} cta={headerCta} />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders a primary navigation landmark", () => {
    render(<Header links={primaryNavLinks} cta={headerCta} />);
    expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
  });

  it("renders a link for each nav item with correct label and href", () => {
    render(<Header links={primaryNavLinks} cta={headerCta} />);
    for (const link of primaryNavLinks) {
      const anchor = screen.getByRole("link", { name: link.label });
      expect(anchor).toBeInTheDocument();
      expect(anchor).toHaveAttribute("href", link.href);
    }
  });

  it("renders the CTA when provided", () => {
    render(<Header links={primaryNavLinks} cta={headerCta} />);
    const cta = screen.getByRole("link", { name: headerCta.label });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute("href", headerCta.href);
  });

  it("does not render CTA when omitted", () => {
    render(<Header links={primaryNavLinks} />);
    expect(
      screen.queryByRole("link", { name: headerCta.label }),
    ).not.toBeInTheDocument();
  });

  it("renders the mobile menu toggle button", () => {
    render(<Header links={primaryNavLinks} cta={headerCta} />);
    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute("aria-controls", "mobile-menu");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("renders the site logo linking to home", () => {
    render(<Header links={primaryNavLinks} cta={headerCta} />);
    const logoLinks = screen.getAllByRole("link", { name: /home/i });
    const logoLink = logoLinks.find((a) => a.getAttribute("href") === "/");
    expect(logoLink).toBeDefined();
    expect(logoLink).toHaveAttribute("href", "/");
  });
});
