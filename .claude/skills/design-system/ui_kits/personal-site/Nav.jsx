// Nav.jsx — sticky top nav with grid-friendly blur.
const Nav = ({ active, onNav, theme, onTheme }) => {
  const items = ["home", "essays", "projects", "now", "archive"];
  return (
    <nav className="ds-nav">
      <a className="ds-brand" onClick={() => onNav("home")}>
        [name]<span className="ds-dot">.</span>
      </a>
      <div className="ds-nav-links">
        {items.map((it) => (
          <a
            key={it}
            className={active === it ? "active" : ""}
            onClick={() => onNav(it)}
          >
            {it}
          </a>
        ))}
      </div>
      <div className="ds-nav-util">
        <span className="mono">v0.4.2</span>
        <button className="ds-theme" onClick={onTheme} title="toggle theme">
          {theme === "ink" ? "paper" : "ink"}
        </button>
      </div>
    </nav>
  );
};

window.Nav = Nav;
