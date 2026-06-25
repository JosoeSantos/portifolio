import type { MDXComponents } from "mdx/types";

import {
  EssayCodeBlock,
  EssayEnd,
  FootnoteRef,
  Marginalia,
  MarginaliaStat,
  ProseRow,
  Section,
} from "@/components/essay";
import { Blockquote, H1, H2, H3, H4, H5, H6, Li, P, Ul } from "./typography";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    ul: Ul,
    li: Li,
    blockquote: Blockquote,
    Section,
    ProseRow,
    Marginalia,
    MarginaliaStat,
    FootnoteRef,
    EssayCodeBlock,
    EssayEnd,
    ...components,
  };
}
