---
name: format-post-mdx
description: Use when formatting, structuring, or marking up a post under /posts/*.mdx with the essay components (Section, ProseRow, Marginalia, MarginaliaStat, FootnoteRef, EssayCodeBlock, EssayEnd). The user's prose is sacred — this skill rearranges and wraps it; it never rewrites it.
---

# Format Post MDX

## Overview

This skill takes a raw or partially-formatted post in `/posts/*.mdx` and wraps it in the essay component layout used by `app/posts/[slug]/page.tsx`. The canonical template lives at `docs/posts/_example.mdx` — read it before editing. The components are already registered globally via `mdx-components.tsx`, so do not import them inside the post.

## The one rule that cannot be broken

**Never change the user's words.** Not casing, not punctuation, not "fixing" typos, not "tightening" a sentence, not splitting or merging sentences, not translating. The text the user wrote is the text that ships. This skill only:

- splits prose into `<Section>` and `<ProseRow>` blocks,
- moves existing parenthetical asides or callouts the user already wrote into `<Marginalia>` (verbatim),
- inserts `<FootnoteRef>` markers where the user already had a footnote indicator (or where the user explicitly asks for one),
- wraps already-fenced code in `<EssayCodeBlock>`,
- adds the `<EssayEnd>` marker.

If you cannot tell where a section break belongs, ask. Do not guess by paraphrasing.

## Files involved

- `docs/posts/_example.mdx` — the reference template. Mirror its structure.
- `/posts/<slug>.mdx` — the file you edit. The body starts at the first `<Section>` — **no `<h1>` and no frontmatter inside the MDX**.
- `/posts/index.ts` — the post's metadata (`number`, `title`, `dateLong`, `lead`, `tags`, `readingTime`, `words`). The hero is rendered from this entry by `EssayLayout`, so the MDX must not duplicate it.
- `mdx-components.tsx` — already wires `Section`, `ProseRow`, `Marginalia`, `MarginaliaStat`, `FootnoteRef`, `EssayCodeBlock`, `EssayEnd` into MDX. Do not import them in the post.

## Component cheat sheet

| Component | Purpose | Required props |
|---|---|---|
| `<Section n id title>` | Numbered section. Wraps the whole section. | `n` ("01", "02", …), `id` (anchor slug), `title` (lowercase prose) |
| `<ProseRow marginalia={…}>` | A run of paragraphs (1fr) with optional 220px marginalia gutter. Omit `marginalia` for full-width prose. | none |
| `<Marginalia mark="a">` | Footnote-style side note. Pairs with a `<FootnoteRef mark="a" />` inline in the prose. Marks are letters. | `mark` |
| `<MarginaliaStat stats={[…]} />` | Compact "from → to" data callout. | `stats: { label, from, to }[]` |
| `<FootnoteRef mark="a" />` | Inline superscript marker. Must match a sibling `<Marginalia>` mark. | `mark` |
| `<EssayCodeBlock file lang code={\`…\`} />` | Code block with caption, line numbers, copy. Pass the code as a template literal. | `file`, `code`. `lang` optional. |
| `<EssayEnd sections={N} words={N} />` | The "¶ end · N sections · N words" marker. Goes at the very bottom of the last `<Section>`. | `sections`, `words` |

## Structural checklist

1. **Read `docs/posts/_example.mdx`.** Always. It's the source of truth for spacing, prop ordering, and where each component nests.
2. **Strip any top-level `<h1>` or title heading** from the body. The hero comes from `/posts/index.ts`.
3. **Split the post into sections.** Use the user's existing headings (`##`, `###`, or clearly-marked breaks) to decide where one `<Section>` ends and the next begins. If the user only wrote one continuous block, ask before inventing breaks.
4. **Number sections sequentially** as `"01"`, `"02"`, … with two-digit zero-padding.
5. **Generate the `id`** by lowercasing the section title and replacing spaces with hyphens. Keep the title text exactly as the user wrote it.
6. **Wrap each block of paragraphs in a `<ProseRow>`.** A new `<ProseRow>` per logical paragraph cluster — typically one per heading, plus one per code block or stat callout. Re-paste the prose inside untouched.
7. **Marginalia:** only add when the user already wrote a parenthetical aside, a footnote, or explicitly asks. Lift the aside into `<Marginalia mark="a">…</Marginalia>` and drop a `<FootnoteRef mark="a" />` where the aside originally appeared inline. Marks restart at `"a"` per section is fine; consistency within a section matters more than globally.
8. **Code:** fenced code blocks become `<EssayCodeBlock>`. Preserve indentation and newlines exactly inside the template literal. Set `file` to a short filename the user mentioned (or a sensible one drawn from the surrounding prose — confirm with the user if unsure). Set `lang` to the fence's language.
9. **Inline code** (single backticks) stays as-is — `ProseRow` already styles `<code>`. Don't promote it to a block.
10. **Lists & blockquotes** — leave them in the source prose; `mdx-components.tsx` maps `ul`, `li`, `blockquote` to styled components. They render fine inside a `<ProseRow>`.
11. **`<EssayEnd>`** sits inside the final `<Section>`, after its last `<ProseRow>`. Compute `sections` from the count you produced. Use the `words` value from `/posts/index.ts` for that post — do not recount.
12. **Update `/posts/index.ts` only if asked.** If section/word counts drift, surface the discrepancy to the user; do not silently rewrite the metadata.

## Voice & style

The site voice is lowercase prose, first-person, dry, specific. The user already writes this way — your job is to preserve it, not enforce it. Never down-case a proper noun the user capitalised, never up-case a sentence start the user left lowercase. If something looks like a "typo", it's almost certainly intentional. Leave it.

## Output format

When editing, prefer `Edit` over `Write` so the diff makes the structural change obvious. After editing, summarise in one or two sentences: how many sections, where marginalia were added, anything you flagged for the user. Do not produce a recap of the prose itself.

## Common mistakes

| Mistake | Fix |
|---|---|
| Rewriting a sentence to "fit better" | Stop. Paste it verbatim. |
| Adding an `<h1>` with the post title | The hero renders from `/posts/index.ts`. Body starts at `<Section>`. |
| Importing components at the top of the MDX | They're already registered in `mdx-components.tsx`. |
| Inventing section breaks where the user wrote a continuous block | Ask the user where to split. |
| Inventing marginalia from "interesting" sentences | Only lift content the user already wrote as an aside or footnote. |
| `mark` on `<Marginalia>` doesn't match its `<FootnoteRef>` | The pair is what links them visually — keep them in sync. |
| Recomputing `words` and overwriting `/posts/index.ts` | Metadata is the user's call. Surface drift, don't fix it silently. |
| Code block indentation changed inside the template literal | Preserve whitespace exactly; the renderer numbers lines as-is. |
| Translating Portuguese prose to English (or vice versa) | The text the user wrote is the text that ships. |
