import type { Meta, StoryObj } from "@storybook/react";
import { EssayHero } from "./essay-hero";

const meta: Meta<typeof EssayHero> = {
  title: "Components/Essay/EssayHero",
  component: EssayHero,
};
export default meta;

export const WithLead: StoryObj<typeof EssayHero> = {
  render: () => (
    <div style={{ minWidth: 1100 }}>
      <EssayHero
        number="002"
        title="containment, in practice"
        lead="a long, slow look at css containment — what it actually buys you, where it lies, and why it changed how i lay out cards."
        dateLong="january 15, 2026"
        readingTime="8 min"
        words={1842}
        tags={["css", "performance", "layout"]}
        permalink="/posts/containment-in-practice"
      />
    </div>
  ),
};

export const WithoutLead: StoryObj<typeof EssayHero> = {
  render: () => (
    <div style={{ minWidth: 1100 }}>
      <EssayHero
        number="003"
        title="a shorter note on margins"
        dateLong="february 4, 2026"
        readingTime="3 min"
        words={612}
        tags={["css", "type"]}
        permalink="/posts/a-shorter-note-on-margins"
      />
    </div>
  ),
};
