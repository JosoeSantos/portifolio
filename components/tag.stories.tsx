import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
};
export default meta;

export const Default: StoryObj<typeof Tag> = {
  render: () => <Tag label="typescript" />,
};
export const Active: StoryObj<typeof Tag> = {
  render: () => <Tag label="typescript" active />,
};
export const Solid: StoryObj<typeof Tag> = {
  render: () => <Tag label="typescript" solid />,
};
