// CodeBlock.jsx — reading-surface code block with caption.
const CodeBlock = ({ file, lang, lines, children }) => (
  <figure className="ds-code">
    <figcaption className="mono">
      <span className="ds-accent-text">{file}</span>
      {lang && <span> · {lang}</span>}
      {lines && <span> · {lines}</span>}
    </figcaption>
    <pre>
      <code>{children}</code>
    </pre>
  </figure>
);

// Footnote.jsx — numbered marginalia.
const Footnote = ({ n, children }) => (
  <span className="ds-footnote">
    <sup className="mono">[{n}]</sup>
    <span className="ds-footnote-body">{children}</span>
  </span>
);

// Footer.jsx — minimal site footer.
const Footer = () => (
  <footer className="ds-footer mono">
    <span>© 2026 · [name]</span>
    <span>·</span>
    <a>rss</a>
    <span>·</span>
    <a>github</a>
    <span>·</span>
    <span>built with care</span>
  </footer>
);

window.CodeBlock = CodeBlock;
window.Footnote = Footnote;
window.Footer = Footer;
