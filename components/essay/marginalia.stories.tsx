import type { Meta, StoryObj } from "@storybook/react";
import { Marginalia } from "./marginalia";

const meta: Meta<typeof Marginalia> = {
  title: "Components/Essay/Marginalia",
  component: Marginalia,
};
export default meta;

export const Default: StoryObj<typeof Marginalia> = {
  render: () => (
    <Marginalia mark="a">
      <em>contain: layout</em> is a promise — once you sign it, the browser
      stops asking the rest of the page about your card.
    </Marginalia>
  ),
};
