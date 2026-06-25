// Shared post content + a few small primitives used across variations.
// The essay is about web/frontend craft (CSS containment), authored to
// match the Ochre voice rules: lowercase, first-person, dry, specific.

const POST = {
  title: "the quiet power of css containment",
  date: "2026-04-22",
  dateLong: "april 22, 2026",
  minutes: 9,
  words: 1842,
  tags: ["css", "performance", "web"],
  eyebrow: "essay",
  lead:
    "i've been chasing a layout jank for two weeks. the fix was one css property and a sentence in the spec i'd read four times without understanding.",
};

// Lucide-stroke inline icons. 1.5px stroke, currentColor, sized to type.
const Icon = ({ name, size = 16 }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: 1.5,
    strokeLinecap: "round", strokeLinejoin: "round",
    style: { flexShrink: 0, verticalAlign: "-2px" },
  };
  switch (name) {
    case "arrow-left":
      return (<svg {...props}><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>);
    case "link":
      return (<svg {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>);
    case "rss":
      return (<svg {...props}><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>);
    case "copy":
      return (<svg {...props}><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>);
    case "hash":
      return (<svg {...props}><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>);
    default: return null;
  }
};

// The three section structure for the essay. Each section has an id used
// by the table-of-contents in variation B.
const SECTIONS = [
  { id: "the-symptom", title: "the symptom", n: "01" },
  { id: "the-spec", title: "what the spec actually says", n: "02" },
  { id: "the-fix", title: "the fix, in two lines", n: "03" },
  { id: "the-cost", title: "the cost", n: "04" },
];

window.POST = POST;
window.SECTIONS = SECTIONS;
window.Icon = Icon;
