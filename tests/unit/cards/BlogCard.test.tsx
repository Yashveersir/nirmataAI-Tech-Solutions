import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BlogCard } from "@/components/cards/BlogCard";
import type { BlogPost } from "@/types";

const mockPost: BlogPost = {
  id: "post-1",
  slug: "test-blog-post",
  title: "Test Blog Post Title",
  excerpt: "A short excerpt for testing purposes.",
  content: "Full content here.",
  category: "Web Development",
  tags: ["React", "Testing"],
  featuredImage: "https://placehold.co/600x400",
  publishedAt: "2026-01-15",
  author: {
    name: "Jane Smith",
    avatar: "https://placehold.co/120x120",
  },
};

describe("BlogCard", () => {
  it("renders the post title", () => {
    render(<BlogCard post={mockPost} />);
    expect(screen.getByText("Test Blog Post Title")).toBeInTheDocument();
  });

  it("renders the excerpt", () => {
    render(<BlogCard post={mockPost} />);
    expect(
      screen.getByText("A short excerpt for testing purposes."),
    ).toBeInTheDocument();
  });

  it("renders the category", () => {
    render(<BlogCard post={mockPost} />);
    expect(screen.getByText("Web Development")).toBeInTheDocument();
  });

  it("renders the author name", () => {
    render(<BlogCard post={mockPost} />);
    expect(screen.getByText(/jane smith/i)).toBeInTheDocument();
  });

  it("renders a link to the full article", () => {
    render(<BlogCard post={mockPost} />);
    const links = screen.getAllByRole("link");
    const articleLink = links.find((a) => a.getAttribute("href") === "/blog/test-blog-post");
    expect(articleLink).toBeDefined();
  });

  it("renders the publish date", () => {
    render(<BlogCard post={mockPost} />);
    expect(screen.getByText("Jan 15, 2026")).toBeInTheDocument();
  });
});
