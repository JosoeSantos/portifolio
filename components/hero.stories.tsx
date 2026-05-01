import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./hero";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
};
export default meta;

export const Default: StoryObj<typeof Hero> = {
  render: () => (
    <Hero
      name="josoe"
      blurb="i build things for the web and write about what i learn along the way. currently focused on design systems and slow software."
    />
  ),
};
