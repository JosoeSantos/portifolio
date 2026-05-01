import type { Meta, StoryObj } from "@storybook/react";
import { CodeBlock } from "./code-block";

const meta: Meta<typeof CodeBlock> = {
  title: "Components/CodeBlock",
  component: CodeBlock,
};
export default meta;

export const WithCaption: StoryObj<typeof CodeBlock> = {
  render: () => (
    <CodeBlock file="app/layout.tsx" lang="tsx" lines="1-12">
      {`export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`}
    </CodeBlock>
  ),
};

export const Minimal: StoryObj<typeof CodeBlock> = {
  render: () => <CodeBlock>{`const x = 1 + 1; // 2`}</CodeBlock>,
};
