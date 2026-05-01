// EssayRow.jsx — index list row.
const EssayRow = ({ date, title, tags, minutes, onClick }) => (
  <div className="ds-row" onClick={onClick}>
    <span className="ds-row-date mono">{date}</span>
    <span className="ds-row-title">
      {title}
      <span className="ds-row-arrow">→</span>
    </span>
    <span className="ds-row-tags mono">
      {tags.map((t, i) => (
        <span key={t} className={i === 0 ? "ds-accent-text" : ""}>
          #{t}
          {i < tags.length - 1 ? " · " : ""}
        </span>
      ))}
      <span className="ds-row-min"> · {minutes} min</span>
    </span>
  </div>
);

window.EssayRow = EssayRow;
