// Screens.jsx — assembled screens for the click-thru.

const HomeScreen = ({ onNav }) => (
  <>
    <Hero onNav={onNav} />
    <section className="ds-section">
      <header className="ds-section-head">
        <h2>current projects</h2>
        <a className="ds-section-more" onClick={() => onNav("projects")}>
          all projects →
        </a>
      </header>
      <div className="ds-grid-2">
        <ProjectCard
          name="typeset"
          status="live"
          version="v0.4.2"
          blurb="a typesetting tool for personal essays. layout engine in rust, web frontend."
          tags={["rust", "typography"]}
        />
        <ProjectCard
          name="lispy"
          status="draft"
          version="v0.0.1"
          blurb="a tiny lisp interpreter, written in C, mostly for the joy of it."
          tags={["parsers", "c"]}
        />
      </div>
    </section>
    <section className="ds-section">
      <header className="ds-section-head">
        <h2>recent writing</h2>
        <a className="ds-section-more" onClick={() => onNav("essays")}>
          all essays →
        </a>
      </header>
      <div className="ds-rows">
        <EssayRow
          date="2026-04-22"
          title="notes on writing a parser"
          tags={["parsers", "c"]}
          minutes={12}
        />
        <EssayRow
          date="2026-03-08"
          title="small things, again"
          tags={["essays"]}
          minutes={4}
        />
        <EssayRow
          date="2026-02-14"
          title="the case for hairlines"
          tags={["design", "web"]}
          minutes={7}
        />
      </div>
    </section>
  </>
);

const EssaysScreen = ({ onOpen }) => {
  const [tag, setTag] = React.useState("all");
  const all = [
    {
      date: "2026-04-22",
      title: "notes on writing a parser",
      tags: ["parsers", "c"],
      minutes: 12,
    },
    {
      date: "2026-03-08",
      title: "small things, again",
      tags: ["essays"],
      minutes: 4,
    },
    {
      date: "2026-02-14",
      title: "the case for hairlines",
      tags: ["design", "web"],
      minutes: 7,
    },
    {
      date: "2026-01-30",
      title: "writing tools, and tools for writing",
      tags: ["tools", "writing"],
      minutes: 9,
    },
    {
      date: "2025-12-04",
      title: "rust, after a year",
      tags: ["rust"],
      minutes: 14,
    },
    {
      date: "2025-10-18",
      title: "on quitting twitter",
      tags: ["essays"],
      minutes: 3,
    },
  ];
  const tags = ["all", "parsers", "essays", "design", "tools", "rust"];
  const filtered =
    tag === "all" ? all : all.filter((e) => e.tags.includes(tag));
  return (
    <section className="ds-section ds-reading-bg">
      <header className="ds-section-head">
        <h2>essays</h2>
        <span className="mono ds-section-meta">
          {filtered.length} of {all.length}
        </span>
      </header>
      <div className="ds-filterbar">
        {tags.map((t) => (
          <button
            key={t}
            className={`ds-tag ${tag === t ? "solid" : ""}`}
            onClick={() => setTag(t)}
          >
            {t === "all" ? "all" : `#${t}`}
          </button>
        ))}
      </div>
      <div className="ds-rows">
        {filtered.map((e) => (
          <EssayRow key={e.title} {...e} onClick={() => onOpen(e)} />
        ))}
      </div>
    </section>
  );
};

const ReadingScreen = ({ essay, onBack }) => (
  <article className="ds-reading">
    <a className="ds-back mono" onClick={onBack}>
      ← back to essays
    </a>
    <header className="ds-reading-head">
      <div className="mono ds-eyebrow">
        essay · {essay?.minutes ?? 12} min · {essay?.date ?? "2026-04-22"}
      </div>
      <h1>{essay?.title ?? "notes on writing a parser"}</h1>
      <div className="ds-reading-rule"></div>
    </header>
    <div className="prose ds-reading-body">
      <p className="ds-lead">
        i spent a weekend rewriting a parser i wrote three years ago. it was, of
        course, much easier the second time — and most of the lessons were about
        what i was wrong about the first time.
      </p>
      <p>
        the original was a hand-rolled recursive descent parser for a small lisp
        dialect. i thought i was being clever by skipping a lexer. i was being
        clever, but it was the wrong kind of clever. tokens are <em>cheap</em>;
        doing them eagerly means the rest of the parser can stop thinking about
        whitespace.
      </p>
      <CodeBlock file="parser.c" lang="c" lines="lines 18–26">
        {`// match a quoted string, including escapes
static Token read_string(Lexer *lx) {
  char buf[256]; int i = 0;
  while (peek(lx) != '"' && !at_end(lx)) {
    buf[i++] = read_char(lx);
  }
  return tok(T_STR, buf, i);
}`}
      </CodeBlock>
      <p>
        the second realization was about errors. my first parser would happily
        produce a malformed AST and let the evaluator deal with it. the second
        one refuses, loudly. it's nicer to write code against.
        <sup className="mono">[1]</sup>
      </p>
      <hr />
      <ol className="ds-footnotes mono">
        <li>
          i'm convinced this is the single biggest improvement you can make to a
          hobbyist parser.
        </li>
      </ol>
    </div>
  </article>
);

const NowScreen = () => (
  <section className="ds-section ds-reading-bg">
    <header className="ds-section-head">
      <h2>now</h2>
      <span className="mono ds-section-meta">
        april 2026 · updated 12 days ago
      </span>
    </header>
    <NowList
      items={[
        {
          label: "working on",
          text: "a parser for a tiny lisp",
          note: "weeknights, in C",
        },
        {
          label: "reading",
          text: "the c programming language",
          note: "(again)",
        },
        { label: "listening", text: "arvo pärt · spiegel im spiegel" },
        { label: "current city", text: "berlin" },
        { label: "open to", text: "freelance contracts · type & tools work" },
        { label: "not doing", text: "social media · meetings before noon" },
      ]}
    />
  </section>
);

const ProjectsScreen = () => (
  <section className="ds-section ds-reading-bg">
    <header className="ds-section-head">
      <h2>projects</h2>
      <span className="mono ds-section-meta">4 active · 11 archived</span>
    </header>
    <div className="ds-grid-2">
      <ProjectCard
        name="typeset"
        status="live"
        version="v0.4.2"
        blurb="a typesetting tool for personal essays. layout engine in rust, web frontend."
        tags={["rust", "typography"]}
      />
      <ProjectCard
        name="lispy"
        status="draft"
        version="v0.0.1"
        blurb="a tiny lisp interpreter, written in C, mostly for the joy of it."
        tags={["parsers", "c"]}
      />
      <ProjectCard
        name="paper"
        status="live"
        version="v1.2.0"
        blurb="a notes app for myself. plain text, full-text search, version history."
        tags={["tools", "rust"]}
      />
      <ProjectCard
        name="hairline"
        status="draft"
        version="v0.1"
        blurb="this design system. the one you're reading right now."
        tags={["design", "web"]}
      />
    </div>
  </section>
);

const NotFoundScreen = ({ onNav }) => (
  <section className="ds-404 hatch-bg">
    <div className="mono ds-eyebrow">error · 404</div>
    <h1 className="ds-404-title">
      not here<span className="ds-accent">.</span>
    </h1>
    <p className="ds-404-sub">
      the page <code>/blog/2019/foo</code> is not here. it may have moved, or i
      may have deleted it.
    </p>
    <div className="ds-hero-actions">
      <button className="btn primary" onClick={() => onNav("home")}>
        Home
      </button>
      <button className="btn secondary" onClick={() => onNav("archive")}>
        Archive →
      </button>
    </div>
  </section>
);

const ArchiveScreen = () => (
  <section className="ds-section ds-reading-bg">
    <header className="ds-section-head">
      <h2>archive</h2>
      <span className="mono ds-section-meta">since 2014</span>
    </header>
    <div className="ds-archive">
      {[2026, 2025, 2024, 2023, 2022].map((y) => (
        <div key={y} className="ds-archive-year">
          <div className="mono ds-archive-y">{y}</div>
          <div className="ds-archive-count mono">
            {[12, 18, 9, 14, 22][2026 - y]} entries
          </div>
        </div>
      ))}
    </div>
  </section>
);

window.HomeScreen = HomeScreen;
window.EssaysScreen = EssaysScreen;
window.ReadingScreen = ReadingScreen;
window.NowScreen = NowScreen;
window.ProjectsScreen = ProjectsScreen;
window.NotFoundScreen = NotFoundScreen;
window.ArchiveScreen = ArchiveScreen;
