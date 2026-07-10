import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import type { Project } from "@/types";

const mockProject: Project = {
  id: "project-1",
  slug: "test-project",
  title: "Test Project",
  category: "Web Application",
  description: "A test project description.",
  technologies: ["Next.js", "TypeScript"],
  thumbnail: "https://placehold.co/600x400",
  caseStudy: "A detailed case study for testing.",
};

describe("ProjectCard", () => {
  it("renders the project title", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders the category", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Web Application")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<ProjectCard project={mockProject} />);
    expect(
      screen.getByText("A test project description."),
    ).toBeInTheDocument();
  });

  it("renders a 'View case study' link", () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByRole("link", { name: /view case study/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/portfolio/test-project");
  });
});
