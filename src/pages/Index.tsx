const Index = () => (
  <main>
    <header className="sheet-header">
      <span>R / ADE</span>
      <span>ENVIRONMENTS FOR ENGINEERING</span>
    </header>
    <section className="introduction" aria-labelledby="headline">
      <span className="section-number" aria-hidden="true">01</span>
      <p className="eyebrow">A NEW LEVEL OF CONTROL</p>
      <h1 id="headline">Agentic software engineering needs a new primitive<span className="period">.</span></h1>
      <p className="subtitle">Introducing the Agentic Development Environment.</p>
    </section>
    <section className="statement" aria-label="Our purpose">
      <span className="section-number" aria-hidden="true">02</span>
      <p>Writing code helped us understand the systems we built. As agents write more of it, we need a new way to stay in control.</p>
      <p>ADE lets engineers design the system and own the decisions, while agents handle the code.</p>
    </section>
    <figure className="system">
      <figcaption><span>FIG. 01</span> THE ENGINEER STAYS IN CONTROL</figcaption>
      <div className="flow" aria-label="Engineer defines the design. Design guides agents. Agents implement code.">
        <div className="node human"><span className="node-label">DECIDE</span><strong>Engineer</strong></div>
        <span className="connector" aria-hidden="true">→</span>
        <div className="node human"><span className="node-label">DEFINE</span><strong>Design</strong></div>
        <span className="connector" aria-hidden="true">→</span>
        <div className="node"><span className="node-label">IMPLEMENT</span><strong>Agents</strong></div>
        <span className="connector" aria-hidden="true">→</span>
        <div className="node"><span className="node-label">BUILD</span><strong>Code</strong></div>
      </div>
    </figure>
    <section className="invitation" aria-label="Contact">
      <div><p>We’re building ADE. Interested?</p><a className="email" href="mailto:pankaj@rutiletech.com">pankaj@rutiletech.com</a></div>
      <a className="contact" href="mailto:pankaj@rutiletech.com">Let’s talk <span aria-hidden="true">↗</span></a>
    </section>
    <footer><span>Rutile Technologies, Inc.</span><span>© {new Date().getFullYear()}</span></footer>
  </main>
);

export default Index;
