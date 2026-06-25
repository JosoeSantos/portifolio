import type { Meta, StoryObj } from "@storybook/react";
import { Marginalia } from "./marginalia";
import { ProseRow } from "./prose-row";

const meta: Meta<typeof ProseRow> = {
  title: "Components/Essay/ProseRow",
  component: ProseRow,
};
export default meta;

export const Default: StoryObj<typeof ProseRow> = {
  render: () => (
    <div style={{ minWidth: 1100 }}>
      <ProseRow>
        <p>
          containment is the rare browser feature that pays for itself the day
          you turn it on. one declaration, one promise — the layout pass stops
          climbing back up the tree.
        </p>
        <p>
          the trick is knowing where to put it. too high and you starve the
          children; too low and you've written ceremony for nothing.
        </p>
      </ProseRow>
    </div>
  ),
};

export const WithMarginalia: StoryObj<typeof ProseRow> = {
  render: () => (
    <div style={{ minWidth: 1100 }}>
      <ProseRow
        marginalia={
          <Marginalia mark="a">
            <em>contain: layout</em> is a promise the browser will hold you to —
            no descendant escapes the box.
          </Marginalia>
        }
      >
        <p>
          containment is the rare browser feature that pays for itself the day
          you turn it on. the layout pass stops climbing back up the tree, and
          the paint stays inside the card.
        </p>
      </ProseRow>
    </div>
  ),
};
