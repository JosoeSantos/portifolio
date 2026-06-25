export type Post = {
  slug: string;
  number: string;
  title: string;
  date: string;
  dateLong: string;
  tags: string[];
  readingTime: string;
  words: number;
  description?: string;
  lead?: string;
};

export const posts: Post[] = [
  {
    slug: "a-rant",
    number: "003",
    title: "a rant",
    date: "2026-05-16",
    dateLong: "june 1, 2025",
    tags: ["opinion"],
    readingTime: "2 min",
    words: 320,
    description: "a running log of what changed and what's next.",
    lead: "a running log of what changed in this site, what i'm reading next, and the rough shape of where it's heading.",
  },
  {
    slug: "the-journey-towards-good-observability",
    number: "002",
    title: "a viagem em direção a uma boa observabilidade",
    date: "2026-01-15",
    dateLong: "january 15, 2026",
    tags: ["observability", "otel", "open-telemetry"],
    readingTime: "8 min",
    words: 1240,
    description:
      "on open telemetry, vendor lock-in, and why your team deserves a standard.",
    lead: "on open telemetry, vendor lock-in, and why every team deserves a standard they can move with — instead of one that holds them in place.",
  },
  {
    slug: "my-blog-updates",
    number: "001",
    title: "blog updates",
    date: "2025-06-01",
    dateLong: "june 1, 2025",
    tags: ["meta"],
    readingTime: "2 min",
    words: 320,
    description: "a running log of what changed and what's next.",
    lead: "a running log of what changed in this site, what i'm reading next, and the rough shape of where it's heading.",
  },


];

export function findPostIndex(slug: string) {
  return posts.findIndex((p) => p.slug === slug);
}

export function getPostNeighbors(slug: string) {
  const i = findPostIndex(slug);
  if (i === -1) return { previous: null, next: null };
  return {
    previous: i > 0 ? posts[i - 1] : null,
    next: i < posts.length - 1 ? posts[i + 1] : null,
  };
}
