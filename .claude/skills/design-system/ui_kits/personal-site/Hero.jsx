// Hero.jsx — promo hero on the grid background.
const Hero = ({ onNav }) => (
  <section className="ds-hero grid-bg">
    <div className="ds-hero-inner">
      <div className="ds-eyebrow mono">software · writing · since 2014</div>
      <h1 className="ds-hero-title">
        i build small,
        <br />
        careful software<span className="ds-accent">.</span>
      </h1>
      <p className="ds-hero-sub">
        i'm <span className="ds-accent-text">[name]</span>. currently working on
        a typesetting tool and a tiny lisp. previously at a place you've heard
        of, doing things you mostly haven't.
      </p>
      <div className="ds-hero-actions">
        <button className="btn primary" onClick={() => onNav("essays")}>
          Read essays
        </button>
        <button className="btn secondary" onClick={() => onNav("projects")}>
          See projects →
        </button>
      </div>
      <div className="ds-hero-meta mono">
        <span>last updated · 2026-04-22</span>
        <span>·</span>
        <span>currently in · berlin</span>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
