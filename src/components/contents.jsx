const Contents = () => {
  return (
    <section id="contents" className="section" style={{ background: '#0f0f0f' }}>
      <div className="title">
        <span className="script">Table of</span>
        <span className="bold">Contents</span>
      </div>
      <div className="toc-grid container reveal">
        <a className="toc" href="#branding">
          <span className="num">01</span>
          <h3>Branding</h3>
          <span className="tag">Design</span>
        </a>
        <a className="toc" href="#social">
          <span className="num">02</span>
          <h3>Social Media</h3>
          <span className="tag">Posts</span>
        </a>
        <a className="toc" href="#packaging">
          <span className="num">03</span>
          <h3>Packaging</h3>
          <span className="tag">Design</span>
        </a>
        <a className="toc" href="#print">
          <span className="num">04</span>
          <h3>Print Media</h3>
          <span className="tag">Design</span>
        </a>
        <a className="toc" href="#uiux">
          <span className="num">05</span>
          <h3>UI / UX</h3>
          <span className="tag">Product</span>
        </a>
        <a className="toc" href="#logo-folio">
          <span className="num">06</span>
          <h3>Logo Folio</h3>
          <span className="tag">Folio</span>
        </a>
      </div>
    </section>
  );
};

export default Contents;