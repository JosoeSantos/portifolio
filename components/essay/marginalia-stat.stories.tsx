import type { Meta, StoryObj } from "@storybook/react";
import { MarginaliaStat } from "./marginalia";

const meta: Meta<typeof MarginaliaStat> = {
  title: "Components/Essay/MarginaliaStat",
  component: MarginaliaStat,
};
export default meta;

export const Default: StoryObj<typeof MarginaliaStat> = {
  render: () => (
    <MarginaliaStat
      stats={[
        { label: "layout pass", from: "14.0ms", to: "0.4ms" },
        { label: "inp", from: "220ms", to: "38ms" },
      ]}
    />
  ),
};
