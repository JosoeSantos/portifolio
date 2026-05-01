import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote, H1, H2, H3, H4, H5, H6, Li, P, Ul } from "./typography";

const meta: Meta = {
  title: "Typography",
};

export default meta;

export const Heading1: StoryObj = {
  render: () => <H1>Heading 1 — The quick brown fox</H1>,
};

export const Heading2: StoryObj = {
  render: () => <H2>Heading 2 — The quick brown fox</H2>,
};

export const Heading3: StoryObj = {
  render: () => <H3>Heading 3 — The quick brown fox</H3>,
};

export const Heading4: StoryObj = {
  render: () => <H4>Heading 4 — The quick brown fox</H4>,
};

export const Heading5: StoryObj = {
  render: () => <H5>Heading 5 — The quick brown fox</H5>,
};

export const Heading6: StoryObj = {
  render: () => <H6>Heading 6 — The quick brown fox</H6>,
};

export const Paragraph: StoryObj = {
  render: () => (
    <P>
      Paragraph text — The quick brown fox jumps over the lazy dog. Sphinx of
      black quartz, judge my vow.
    </P>
  ),
};

export const UnorderedList: StoryObj = {
  render: () => (
    <Ul>
      <Li>First list item</Li>
      <Li>Second list item</Li>
      <Li>Third list item</Li>
    </Ul>
  ),
};

export const ListItem: StoryObj = {
  render: () => <Li>Standalone list item</Li>,
};

export const BlockquoteStory: StoryObj = {
  name: "Blockquote",
  parameters: {
    docs: {
      description: {
        story:
          "The `animate-rainbow-color` and `timeline-scroll-y-nearest` utilities apply a scroll-driven HSL color animation. In an isolated Storybook canvas the scroll container is absent, so the rainbow animation will not cycle — this is expected. Embed in a scrollable page context to observe the full effect.",
      },
    },
  },
  render: () => (
    <Blockquote>
      &ldquo;The only way to do great work is to love what you do.&rdquo; —
      Steve Jobs
    </Blockquote>
  ),
};

export const TypographyScale: StoryObj = {
  name: "Typography Scale",
  render: () => (
    <div style={{ padding: "2rem", maxWidth: "640px" }}>
      <H1>the long game</H1>
      <H2>writing that compounds</H2>
      <H3>on reading slowly</H3>
      <H4>a note on craft</H4>
      <H5>small observations</H5>
      <H6>meta</H6>
      <P>
        Most things worth doing take longer than expected and reward patience in
        ways that aren't obvious at the start.
      </P>
      <Ul>
        <Li>read primary sources</Li>
        <Li>write to understand</Li>
        <Li>ship before ready</Li>
      </Ul>
      <Blockquote>the map is not the territory.</Blockquote>
    </div>
  ),
};
