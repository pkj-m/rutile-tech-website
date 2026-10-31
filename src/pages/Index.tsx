const Index = () => (
  <main>
    <header className="sheet-header">
      <span>ENVIRONMENTS FOR ENGINEERING</span>
    </header>
    <section className="introduction" aria-labelledby="headline">
      <h1 id="headline">Agentic software engineering needs a new primitive<span className="period">.</span></h1>
      <p className="subtitle">The Agentic Development Environment — you design and decide, agents make it green.</p>
    </section>
    <figure className="system">
      <figcaption><span>FIG. 01</span> DESIGN OWNS THE TESTS. AGENTS CAN'T TOUCH THEM.</figcaption>
      <div className="flow" aria-label="The engineer decides. The design compiles to tests. Agents work the red until it is green. The system stays green.">
        <div className="node human"><span className="node-label">DECIDES</span><strong>Engineer</strong></div>
        <span className="connector" aria-hidden="true">→</span>
        <div className="node human"><span className="node-label">COMPILES TO TESTS</span><strong>Design</strong></div>
        <span className="connector" aria-hidden="true">→</span>
        <div className="node"><span className="node-label">WORK THE RED</span><strong>Agents</strong></div>
        <span className="connector" aria-hidden="true">→</span>
        <div className="node"><span className="node-label">STAYS GREEN</span><strong>System</strong></div>
      </div>
    </figure>
    <section className="invitation" aria-label="Contact">
      <div><p>We're building it.</p><a className="email" href="mailto:pankaj@rutiletech.com">pankaj@rutiletech.com</a></div>
      <a className="contact" href="mailto:pankaj@rutiletech.com">Let's talk <span aria-hidden="true">↗</span></a>
    </section>
    <footer><span>Rutile Technologies, Inc.</span><span>© {new Date().getFullYear()}</span></footer>
  </main>
);

export default Index;
