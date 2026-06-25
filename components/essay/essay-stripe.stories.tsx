import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@/components/theme-provider";
import { EssayStripe } from "./essay-stripe";

const meta: Meta<typeof EssayStripe> = {
  title: "Components/Essay/EssayStripe",
  component: EssayStripe,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default meta;

export const Default: StoryObj<typeof EssayStripe> = {
  render: () => <EssayStripe year="2026" month="01" number="002" />,
};
