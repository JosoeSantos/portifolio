export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  readingTime: string;
  description?: string;
};

export const posts: Post[] = [
  {
    slug: "the-journey-towards-good-observability",
    title: "a viagem em direção a uma boa observabilidade",
    date: "2026-01-15",
    tags: ["observability", "otel"],
    readingTime: "8 min",
    description:
      "on open telemetry, vendor lock-in, and why your team deserves a standard.",
  },
  {
    slug: "my-blog-updates",
    title: "blog updates",
    date: "2025-06-01",
    tags: ["meta"],
    readingTime: "2 min",
    description: "a running log of what changed and what's next.",
  },
];
