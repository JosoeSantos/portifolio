import type { Meta, StoryObj } from "@storybook/react";
import { NowList } from "./now-list";

const meta: Meta<typeof NowList> = {
  title: "Components/NowList",
  component: NowList,
};
export default meta;

export const Default: StoryObj<typeof NowList> = {
  render: () => (
    <NowList
      items={[
        { label: "location", value: "lisbon" },
        { label: "reading", value: "the remains of the day", note: "ishiguro" },
        { label: "building", value: "this site" },
        { label: "listening", value: "burial — untrue" },
      ]}
    />
  ),
};
