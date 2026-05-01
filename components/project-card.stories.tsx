import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./project-card";

const meta: Meta<typeof ProjectCard> = {
  title: "Components/ProjectCard",
  component: ProjectCard,
};
export default meta;

export const Live: StoryObj<typeof ProjectCard> = {
  render: () => (
    <ProjectCard
      name="portifolio"
      status="live"
      version="v2.1"
      blurb="personal site built with next.js 16, tailwind v4, and the ochre design system."
      tags={["next.js", "typescript", "tailwind"]}
    />
  ),
};

export const Draft: StoryObj<typeof ProjectCard> = {
  render: () => (
    <ProjectCard
      name="design-system"
      status="draft"
      version="v0.3"
      blurb="ochre — a minimal design system for personal sites. tokens, components, and patterns."
      tags={["design", "tokens", "storybook"]}
    />
  ),
};

export const Archive: StoryObj<typeof ProjectCard> = {
  render: () => (
    <ProjectCard
      name="old-blog"
      status="archive"
      version="v1.0"
      blurb="the first version. wordpress. we don't talk about it."
      tags={["wordpress"]}
    />
  ),
};
