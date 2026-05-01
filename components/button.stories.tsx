import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
    },
    size: {
      control: "select",
      options: ["default", "compact"],
    },
  },
};
export default meta;

export const Primary: StoryObj<typeof Button> = {
  render: () => <Button variant="primary">read essays</Button>,
};
export const Secondary: StoryObj<typeof Button> = {
  render: () => <Button variant="secondary">see projects</Button>,
};
export const Ghost: StoryObj<typeof Button> = {
  render: () => <Button variant="ghost">more</Button>,
};

export const CompactPrimary: StoryObj<typeof Button> = {
  args: {
    variant: "primary",
    size: "compact",
    children: "dark",
  },
};

export const CompactSecondary: StoryObj<typeof Button> = {
  args: {
    variant: "secondary",
    size: "compact",
    children: "dark",
  },
};

export const CompactGhost: StoryObj<typeof Button> = {
  args: {
    variant: "ghost",
    size: "compact",
    children: "dark",
  },
};
