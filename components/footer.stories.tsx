import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./footer";

const meta: Meta = {
  title: "Components/Footer",
};
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Footer.Root>
      <Footer.Copyright name="josoe" year={2025} />
      <Footer.Separator />
      <Footer.LinkGroup>
        <Footer.Link
          href="https://github.com/josoesantos"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Footer.Link>
        <Footer.Separator />
      </Footer.LinkGroup>
      <Footer.LinkGroup>
        <Footer.Link
          href="https://linkedin.com/in/josoesantos"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Footer.Link>
        <Footer.Separator />
      </Footer.LinkGroup>
      <Footer.LinkGroup>
        <Footer.Link href="/rss.xml">RSS</Footer.Link>
      </Footer.LinkGroup>
    </Footer.Root>
  ),
};
