# Personal Site UI Kit

A high-fidelity recreation of the personal site surfaces. Built in JSX and rendered via `index.html`.

## Components

- `Nav.jsx` — sticky top nav with brand mark, links, theme toggle.
- `Hero.jsx` — promo hero with grid background and accent rule.
- `ProjectCard.jsx` — project tile (border, hairline, mono meta).
- `EssayRow.jsx` — index row with date, title, tags.
- `NowList.jsx` — the "now" list with mono labels.
- `Footnote.jsx` / `CodeBlock.jsx` — reading-surface primitives.
- `Footer.jsx` — minimal footer.

## Screens (in `index.html`)

1. **Home (promo)** — grid bg, hero, current projects.
2. **Essays index** — list rows with filter tags.
3. **Essay (reading)** — long-form serif body with code, footnotes.
4. **Now** — list of current state.
5. **404** — hatch background, lowercase apology.

`index.html` is a click-thru prototype — top nav switches between screens.
