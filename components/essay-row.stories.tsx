import type { Meta, StoryObj } from "@storybook/react";
import { EssayRow } from "./essay-row";

const meta: Meta<typeof EssayRow> = {
  title: "Components/EssayRow",
  component: EssayRow,
};
export default meta;

export const Default: StoryObj<typeof EssayRow> = {
  render: () => (
    <EssayRow date="2025-03" title="on finishing things" readingTime="6 min" />
  ),
};

export const WithTags: StoryObj<typeof EssayRow> = {
  render: () => (
    <EssayRow
      date="2025-01"
      title="notes on building slowly"
      tags={["craft", "process"]}
      readingTime="4 min"
    />
  ),
};
