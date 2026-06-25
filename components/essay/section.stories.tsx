import type { Meta, StoryObj } from "@storybook/react";
import { ProseRow, Section } from "./prose-row";

const meta: Meta<typeof Section> = {
  title: "Components/Essay/Section",
  component: Section,
};
export default meta;

export const Default: StoryObj<typeof Section> = {
  render: () => (
    <div style={{ minWidth: 1100 }}>
      <Section n="01" id="the-promise" title="the promise">
        <ProseRow>
          <p>
            containment is a contract. you tell the browser: nothing inside this
            box leaks out, and the browser, in turn, stops asking the rest of
            the page about it.
          </p>
          <p>
            the contract is what makes the optimization possible. without it,
            the engine has to assume the worst.
          </p>
        </ProseRow>
      </Section>
    </div>
  ),
};
