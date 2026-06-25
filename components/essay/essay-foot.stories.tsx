import type { Meta, StoryObj } from "@storybook/react";
import { EssayFoot } from "./essay-foot";

const meta: Meta<typeof EssayFoot> = {
  title: "Components/Essay/EssayFoot",
  component: EssayFoot,
};
export default meta;

export const Default: StoryObj<typeof EssayFoot> = {
  render: () => <EssayFoot />,
};

export const Year2024: StoryObj<typeof EssayFoot> = {
  render: () => <EssayFoot year={2024} />,
};
