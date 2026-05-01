import type { Meta, StoryObj } from "@storybook/react";
import { Footnote } from "./footnote";

const meta: Meta<typeof Footnote> = {
  title: "Components/Footnote",
  component: Footnote,
};
export default meta;

export const Default: StoryObj<typeof Footnote> = {
  render: () => (
    <p style={{ fontFamily: "serif", lineHeight: 1.6 }}>
      most things are more complicated than they appear
      <Footnote n={1}>this includes footnotes</Footnote>.
    </p>
  ),
};
