const Index = () => (
  <main>
    <header className="sheet-header">
      <span>ENVIRONMENTS FOR ENGINEERING</span>
    </header>
    <section className="introduction" aria-labelledby="headline">
      <h1 id="headline">Agentic software engineering needs a new primitive<span className="period">.</span></h1>
      <p className="subtitle">The Agentic Development Environment: you design and decide, agents make it green.</p>
    </section>
    <figure className="system">
      <figcaption><span>FIG. 01</span> NOTHING IS TRUSTED. EVERYTHING IS VERIFIED AGAINST THE DESIGN.<span className="fig-note" aria-hidden="true">DEC-0042 · RETRIES IN CLIENT, NOT QUEUE · ACCEPTED</span></figcaption>
      <div className="flow" aria-label="You edit the design. Tests are derived from the design and cannot be edited by agents. Agents write code. Tests verify every change. The verdict, match or disagree, returns to you.">
        <div className="node human"><span className="node-label">YOU EDIT</span><strong>Design</strong></div>
        <span className="connector" aria-hidden="true">→</span>
        <div className="node derived"><span className="node-label">DERIVED FROM DESIGN</span><strong>Tests</strong><span className="node-sub">AGENTS CAN'T EDIT</span></div>
        <span className="connector" aria-hidden="true">→</span>
        <div className="node work"><span className="node-label">AGENTS WRITE IT</span><strong>Code</strong></div>
        <span className="connector" aria-hidden="true">→</span>
        <div className="node done"><span className="node-label">MATCH OR DISAGREE</span><strong>Verified</strong></div>
      </div>
      <div className="verdict" aria-hidden="true"><span>VERDICT RETURNS TO YOU</span></div>
    </figure>
    <section className="invitation" aria-label="Contact">
      <div><p>We're building it.</p><a className="email" href="mailto:pankaj@rutiletech.com">pankaj@rutiletech.com</a></div>
      <a className="contact" href="mailto:pankaj@rutiletech.com">Let's talk <span aria-hidden="true">↗</span></a>
    </section>
    <footer className="title-block" aria-label="Title block">
      <span className="col title"><span>Title</span>ADE: AGENTIC DEVELOPMENT ENVIRONMENT</span>
      <span className="col"><span>Drawn by</span>RUTILE TECHNOLOGIES, INC.</span>
      <span className="col"><span>Scale</span>NONE</span>
      <span className="col"><span>Rev</span>A</span>
      <span className="col"><span>Sheet</span>1 OF 1</span>
      <span className="col"><span>Year</span>{new Date().getFullYear()}</span>
    </footer>
  </main>
);

export default Index;
