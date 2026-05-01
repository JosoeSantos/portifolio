// ProjectCard.jsx — bordered project tile.
const ProjectCard = ({ name, status, version, blurb, tags, onClick }) => (
  <article className="ds-card" onClick={onClick}>
    <div className="ds-card-meta mono">
      <span className={`ds-badge ${status === "live" ? "live" : "draft"}`}>
        {status}
      </span>
      <span>·</span>
      <span>{version}</span>
    </div>
    <h3 className="ds-card-title">{name}</h3>
    <p className="ds-card-body">{blurb}</p>
    <div className="ds-card-tags">
      {tags.map((t, i) => (
        <span key={t} className={`ds-tag ${i === 0 ? "active" : ""}`}>
          #{t}
        </span>
      ))}
    </div>
  </article>
);

window.ProjectCard = ProjectCard;
