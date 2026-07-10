import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/layout/Footer";
import { footerNavGroups, legalLinks } from "@/data/navigation";
import { siteInfo } from "@/data/site";

describe("Footer", () => {
  it("renders a <footer> landmark", () => {
    render(<Footer groups={footerNavGroups} legalLinks={legalLinks} />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders the newsletter signup form with email input", () => {
    render(<Footer groups={footerNavGroups} legalLinks={legalLinks} />);
    expect(
      screen.getByRole("form", { name: /newsletter signup/i }),
    ).toBeInTheDocument();
    const emailInput = screen.getByLabelText(/email address/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toBeRequired();
  });

  it("renders a subscribe submit button", () => {
    render(<Footer groups={footerNavGroups} legalLinks={legalLinks} />);
    expect(
      screen.getByRole("button", { name: /subscribe/i }),
    ).toBeInTheDocument();
  });

  it("renders contact info from siteInfo", () => {
    render(<Footer groups={footerNavGroups} legalLinks={legalLinks} />);
    const emailLink = screen.getByRole("link", {
      name: siteInfo.contact.email,
    });
    expect(emailLink).toHaveAttribute("href", `mailto:${siteInfo.contact.email}`);

    const phoneLink = screen.getByRole("link", {
      name: siteInfo.contact.phone,
    });
    const telHref = phoneLink.getAttribute("href") ?? "";
    expect(telHref.startsWith("tel:")).toBe(true);

    expect(
      screen.getByText(siteInfo.contact.address),
    ).toBeInTheDocument();
  });

  it("renders a 'Contact' heading for the contact column", () => {
    render(<Footer groups={footerNavGroups} legalLinks={legalLinks} />);
    const headings = screen.getAllByRole("heading", { name: /^contact$/i });
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });

  it("renders each legal link with correct label and href", () => {
    render(<Footer groups={footerNavGroups} legalLinks={legalLinks} />);
    // The legal links row sits in the bottom bar; scope the search to it.
    const legalItems = screen.getAllByRole("listitem");
    const legalRowItems = legalItems.filter((li) =>
      legalLinks.some((l) => l.label === li.textContent?.trim()),
    );
    expect(legalRowItems.length).toBeGreaterThanOrEqual(legalLinks.length);
    for (const link of legalLinks) {
      const candidates = screen.getAllByRole("link", { name: link.label });
      const match = candidates.find((a) => a.getAttribute("href") === link.href);
      expect(match, `expected a legal link to ${link.href}`).toBeDefined();
    }
  });

  it("renders the copyright line with the current year and site name", () => {
    render(<Footer groups={footerNavGroups} legalLinks={legalLinks} />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`${year}.*${siteInfo.name}`)),
    ).toBeInTheDocument();
  });
});
