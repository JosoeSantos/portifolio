import type { Meta, StoryObj } from "@storybook/react";
import { posts } from "@/posts/index";
import { EssayPager } from "./essay-pager";

const [next, previous] = posts;

const meta: Meta<typeof EssayPager> = {
  title: "Components/Essay/EssayPager",
  component: EssayPager,
};
export default meta;

export const BothNeighbors: StoryObj<typeof EssayPager> = {
  render: () => (
    <div style={{ minWidth: 1100 }}>
      <EssayPager previous={previous} next={next} />
    </div>
  ),
};

export const OnlyNext: StoryObj<typeof EssayPager> = {
  render: () => (
    <div style={{ minWidth: 1100 }}>
      <EssayPager previous={null} next={next} />
    </div>
  ),
};

export const OnlyPrevious: StoryObj<typeof EssayPager> = {
  render: () => (
    <div style={{ minWidth: 1100 }}>
      <EssayPager previous={previous} next={null} />
    </div>
  ),
};
