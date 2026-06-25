// Variation C — Documented. The flourish: an oversized monospace
// page-number block on the left ("ESSAY № 037"), and footnotes
// rendered as MARGINALIA in a right margin (collapses below text on
// narrow screens). Hairline-ruled top header borrows the "spec page"
// feel — date | reading | tags | permalink — like a colophon strip.

const VariationC = () => {
  return (
    <div className="vC-root">
      {/* Top strip — full bleed, mono, like a page header in a manual */}
      <div className="vC-stripe">
        <div className="vC-stripe-inner mono">
          <span className="vC-stripe-brand">josoe<span className="vC-dot">.</span></span>
          <span className="vC-stripe-sep">·</span>
          <span>essays</span>
          <span className="vC-stripe-sep">/</span>
          <span>2026</span>
          <span className="vC-stripe-sep">/</span>
          <span>04</span>
          <span className="vC-stripe-sep">/</span>
          <span className="vC-accent-text">037</span>
          <span className="vC-stripe-grow"></span>
          <a>home</a>
          <span className="vC-stripe-sep">·</span>
          <a className="vC-active">essays</a>
          <span className="vC-stripe-sep">·</span>
          <a>projects</a>
          <span className="vC-stripe-sep">·</span>
          <a>now</a>
          <span className="vC-stripe-sep">·</span>
          <button className="vC-theme">ink</button>
        </div>
      </div>

      {/* Spec-style header: a colophon table */}
      <header className="vC-header">
        <div className="vC-header-inner">
          <div className="vC-pageno mono">
            <div className="vC-pageno-label">ESSAY</div>
            <div className="vC-pageno-num">N<span className="vC-pageno-o">º</span> 037</div>
          </div>

          <div className="vC-titleblock">
            <h1 className="vC-title">{POST.title}</h1>
            <p className="vC-lead">{POST.lead}</p>

            <table className="vC-spec mono">
              <tbody>
                <tr>
                  <th>published</th>
                  <td>{POST.dateLong}</td>
                  <th>reading</th>
                  <td>{POST.minutes} min · {POST.words.toLocaleString()} words</td>
                </tr>
                <tr>
                  <th>filed</th>
                  <td>
                    {POST.tags.map((t, i) => (
                      <React.Fragment key={t}>
                        {i > 0 && <span className="vC-spec-sep"> · </span>}
                        <a className="vC-spec-tag">#{t}</a>
                      </React.Fragment>
                    ))}
                  </td>
                  <th>permalink</th>
                  <td><a className="vC-accent-text">/essays/css-containment</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </header>

      {/* Body — three columns: line-numbers · prose · marginalia */}
      <main className="vC-body-wrap">
        <article className="vC-body">

          {/* §1 */}
          <h2 id={SECTIONS[0].id} className="vC-h2">
            <span className="vC-h2-no mono">{SECTIONS[0].n}</span>
            <span>{SECTIONS[0].title}</span>
          </h2>

          <div className="vC-row">
            <div className="vC-prose prose">
              <p>
                the symptom was simple. a long page of cards — about 400 of them — was dropping frames whenever a
                single card opened its hover state. the chrome devtools timeline showed something i'd seen before
                but never understood: the entire layout pass was running for the whole document. one card opening
                was making chromium re-measure 399 of its neighbors.<sup className="vC-fn-ref mono">a</sup>
              </p>
              <p>
                i tried the usual things. <em>will-change</em>. <em>transform: translateZ(0)</em>. moving the hover
                styles off the structural element and onto a child. nothing helped, because none of those address
                the actual problem, which is that the browser doesn't know it's allowed to ignore the rest of the
                document.
              </p>
            </div>
            <aside className="vC-margin">
              <div className="vC-marginal">
                <span className="vC-fn-mark mono">a</span>
                <p>
                  the page was a <em>customer list</em>. about 400 rows. cards because the design called for it,
                  not because i thought it was a good idea.
                </p>
              </div>
            </aside>
          </div>

          {/* §2 */}
          <h2 id={SECTIONS[1].id} className="vC-h2">
            <span className="vC-h2-no mono">{SECTIONS[1].n}</span>
            <span>{SECTIONS[1].title}</span>
          </h2>

          <div className="vC-row">
            <div className="vC-prose prose">
              <p>
                the property is <code>contain</code>. the values that mattered for me were <code>layout</code> and{" "}
                <code>paint</code>. i'd read the spec four times. four. and every time i read it, i thought of it as
                a performance hint — like a polite suggestion to the browser that it might want to optimize.
                <sup className="vC-fn-ref mono">b</sup> that's not what it is.
              </p>
              <p>
                <code>contain: layout</code> is a <em>promise</em>. you are telling the browser: nothing inside this
                box will affect layout outside of it, ever. the browser believes you. it gets to skip work the way a
                function with no side effects gets to be memoized.
              </p>
            </div>
            <aside className="vC-margin">
              <div className="vC-marginal">
                <span className="vC-fn-mark mono">b</span>
                <p>
                  the spec is <a className="vC-accent-text">css containment level 2</a>. about thirty pages, mostly
                  edge cases. the first three are the ones you want.
                </p>
              </div>
            </aside>
          </div>

          <figure className="vC-code">
            <figcaption className="mono">
              <span className="vC-code-file">card.css</span>
              <span className="vC-code-meta"> · css · 6 lines</span>
              <button className="vC-code-copy mono"><Icon name="copy" size={12} /> copy</button>
            </figcaption>
            <pre>
              <code>
                <span className="vC-ln mono">1</span>{`.card {\n`}
                <span className="vC-ln mono">2</span>{`  contain: layout paint;\n`}
                <span className="vC-ln mono">3</span>{`  /* now hover state changes, focus rings, and\n`}
                <span className="vC-ln mono">4</span>{`     internal animations stop the world inside\n`}
                <span className="vC-ln mono">5</span>{`     this box — and never reach the document. */\n`}
                <span className="vC-ln mono">6</span>{`}`}
              </code>
            </pre>
          </figure>

          {/* §3 */}
          <h2 id={SECTIONS[2].id} className="vC-h2">
            <span className="vC-h2-no mono">{SECTIONS[2].n}</span>
            <span>{SECTIONS[2].title}</span>
          </h2>

          <div className="vC-row">
            <div className="vC-prose prose">
              <p>
                the fix was two lines. layout pass dropped from <span className="mono">14ms</span> to{" "}
                <span className="mono">0.4ms</span>. interaction-to-next-paint went from a janky{" "}
                <span className="mono">220ms</span> to a clean <span className="mono">38ms</span>. i felt a small
                embarrassment that this had taken me two weeks.
              </p>
            </div>
            <aside className="vC-margin">
              <div className="vC-marginal vC-marginal-stat">
                <div className="mono vC-stat-label">layout pass</div>
                <div className="mono vC-stat">
                  <span className="vC-stat-from">14.0ms</span>
                  <span className="vC-stat-arrow">→</span>
                  <span className="vC-stat-to">0.4ms</span>
                </div>
                <div className="mono vC-stat-label vC-stat-label-2">inp</div>
                <div className="mono vC-stat">
                  <span className="vC-stat-from">220ms</span>
                  <span className="vC-stat-arrow">→</span>
                  <span className="vC-stat-to">38ms</span>
                </div>
              </div>
            </aside>
          </div>

          {/* §4 */}
          <h2 id={SECTIONS[3].id} className="vC-h2">
            <span className="vC-h2-no mono">{SECTIONS[3].n}</span>
            <span>{SECTIONS[3].title}</span>
          </h2>

          <div className="vC-row">
            <div className="vC-prose prose">
              <p>
                containment is not free. once you say <code>contain: layout</code>, the box becomes a containing
                block for absolutely positioned descendants, which means tooltips, dropdowns, and any popover that
                escapes the card will now be clipped to it. you fix this with <code>contain: paint</code> by being
                more careful, or by portaling the popover out of the tree entirely.
              </p>
              <p>
                i'd been writing css professionally for ten years before i used <code>contain</code> in anger. i
                don't know why i waited. it's the rare web platform feature that does what it says, costs almost
                nothing, and shows up immediately in the profiler.
              </p>
            </div>
            <aside className="vC-margin"></aside>
          </div>

          {/* end mark */}
          <div className="vC-end mono">¶ end · 4 sections · 1,842 words</div>
        </article>
      </main>

      {/* Pager */}
      <nav className="vC-pager">
        <a className="vC-pager-item">
          <div className="mono vC-pager-label">← previous · 036</div>
          <div className="vC-pager-title">small things, again</div>
        </a>
        <a className="vC-pager-item vC-pager-next">
          <div className="mono vC-pager-label">038 · next →</div>
          <div className="vC-pager-title">writing tools, and tools for writing</div>
        </a>
      </nav>

      <footer className="vC-foot mono">
        <span>© 2026 · josoe</span>
        <span>·</span>
        <a>rss</a>
        <span>·</span>
        <a>github</a>
        <span>·</span>
        <span>built with care</span>
      </footer>
    </div>
  );
};

window.VariationC = VariationC;
