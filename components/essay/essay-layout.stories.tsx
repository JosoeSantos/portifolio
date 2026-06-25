import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@/components/theme-provider";
import type { Post } from "@/posts/index";
import { EssayCodeBlock } from "./essay-code-block";
import { EssayEnd } from "./essay-end";
import { EssayLayout } from "./essay-layout";
import { Marginalia, MarginaliaStat } from "./marginalia";
import { ProseRow, Section } from "./prose-row";

const post: Post = {
  slug: "containment-in-practice",
  number: "002",
  title: "containment, in practice",
  date: "2026-01-15",
  dateLong: "january 15, 2026",
  tags: ["css", "performance", "layout"],
  readingTime: "8 min",
  words: 1842,
  description:
    "a long, slow look at css containment — what it buys you and where it lies.",
  lead: "a long, slow look at css containment — what it actually buys you, where it lies, and why it changed how i lay out cards.",
};

const previous: Post = {
  slug: "my-blog-updates",
  number: "001",
  title: "blog updates",
  date: "2025-06-01",
  dateLong: "june 1, 2025",
  tags: ["meta"],
  readingTime: "2 min",
  words: 320,
  description: "a running log of what changed and what's next.",
};

const next: Post = {
  slug: "a-shorter-note-on-margins",
  number: "003",
  title: "a shorter note on margins",
  date: "2026-02-04",
  dateLong: "february 4, 2026",
  tags: ["css", "type"],
  readingTime: "3 min",
  words: 612,
};

const meta: Meta<typeof EssayLayout> = {
  title: "Components/Essay/EssayLayout",
  component: EssayLayout,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default meta;

export const FullShell: StoryObj<typeof EssayLayout> = {
  render: () => (
    <div style={{ minWidth: 1100 }}>
      <EssayLayout post={post} previous={previous} next={next}>
        <Section n="01" id="the-promise" title="the promise">
          <ProseRow
            marginalia={
              <Marginalia mark="a">
                <em>contain: layout</em> is a promise — once signed, the browser
                stops asking the rest of the page about your card.
              </Marginalia>
            }
          >
            <p>
              containment is a contract. you tell the browser: nothing inside
              this box leaks out, and the browser, in turn, stops asking the
              rest of the page about it.
            </p>
            <p>
              the contract is what makes the optimization possible. without it,
              the engine has to assume the worst.
            </p>
          </ProseRow>
          <ProseRow>
            <EssayCodeBlock
              file="card.css"
              lang="css"
              code={`.card {
  contain: layout paint;
}`}
            />
          </ProseRow>
        </Section>

        <Section n="02" id="the-numbers" title="the numbers">
          <ProseRow
            marginalia={
              <MarginaliaStat
                stats={[
                  { label: "layout pass", from: "14.0ms", to: "0.4ms" },
                  { label: "inp", from: "220ms", to: "38ms" },
                ]}
              />
            }
          >
            <p>
              i ran the same feed page twice — once with containment off, once
              with it on — and watched the layout pass collapse from fourteen
              milliseconds to under one.
            </p>
            <p>
              that is the kind of number that makes you suspect your tool, then
              suspect your test, then, finally, believe it.
            </p>
          </ProseRow>
        </Section>

        <EssayEnd sections={2} words={1842} />
      </EssayLayout>
    </div>
  ),
};
