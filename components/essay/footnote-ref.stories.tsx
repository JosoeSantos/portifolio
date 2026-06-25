import type { Meta, StoryObj } from "@storybook/react";
import { FootnoteRef } from "./marginalia";

const meta: Meta<typeof FootnoteRef> = {
  title: "Components/Essay/FootnoteRef",
  component: FootnoteRef,
};
export default meta;

export const Default: StoryObj<typeof FootnoteRef> = {
  render: () => (
    <p
      style={{
        fontFamily: "var(--font-serif), serif",
        fontSize: 17,
        lineHeight: 1.7,
        maxWidth: "60ch",
      }}
    >
      containment is not free — once you say{" "}
      <code>contain: layout</code>, the box becomes a containing block for fixed
      and absolute children
      <FootnoteRef mark="1" />, and that surprise will find you eventually.
    </p>
  ),
};
