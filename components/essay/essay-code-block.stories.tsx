import type { Meta, StoryObj } from "@storybook/react";
import { EssayCodeBlock } from "./essay-code-block";

const meta: Meta<typeof EssayCodeBlock> = {
  title: "Components/Essay/EssayCodeBlock",
  component: EssayCodeBlock,
};
export default meta;

export const CssShort: StoryObj<typeof EssayCodeBlock> = {
  render: () => (
    <EssayCodeBlock
      file="card.css"
      lang="css"
      code={`.card {
  contain: layout paint;
}`}
    />
  ),
};

export const TsLonger: StoryObj<typeof EssayCodeBlock> = {
  render: () => (
    <EssayCodeBlock
      file="lib/observe.ts"
      lang="ts"
      code={`import { metrics } from "@opentelemetry/api";

const meter = metrics.getMeter("layout");
const layoutPass = meter.createHistogram("layout.pass.duration", {
  unit: "ms",
  description: "time spent in the layout pass",
});

export function record(durationMs: number) {
  layoutPass.record(durationMs, {
    "layout.contain": "layout paint",
  });
}`}
    />
  ),
};
