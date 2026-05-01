// NowList.jsx — "now" page list with mono labels.
const NowList = ({ items }) => (
  <dl className="ds-now">
    {items.map((it) => (
      <div key={it.label} className="ds-now-row">
        <dt className="mono">{it.label}</dt>
        <dd>
          {it.text}
          {it.note && <span className="ds-now-note"> {it.note}</span>}
        </dd>
      </div>
    ))}
  </dl>
);

window.NowList = NowList;
