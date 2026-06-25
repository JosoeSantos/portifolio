import type { Meta, StoryObj } from "@storybook/react";
import { EssayEnd } from "./essay-end";

const meta: Meta<typeof EssayEnd> = {
  title: "Components/Essay/EssayEnd",
  component: EssayEnd,
};
export default meta;

export const Default: StoryObj<typeof EssayEnd> = {
  render: () => <EssayEnd sections={4} words={1842} />,
};
