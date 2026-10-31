const Index = () => (
  <main>
    <header className="introduction">
      <h1><span>Agentic software engineering</span><span>needs a new primitive.</span></h1>
      <p className="subtitle">Introducing the Agentic Development Environment.</p>
    </header>
    <div className="letter">
      <div className="body-copy">
        <p>Writing code helped us understand the systems we built. As agents write more of it, we need a new way to stay in control.</p>
        <p>ADE lets engineers design the system and own the decisions, while agents handle the code.</p>
      </div>
      <div className="invitation">
        <p>We’re building ADE. Interested?</p>
        <a className="contact" href="mailto:pankaj@rutiletech.com">Let’s talk <span aria-hidden="true">↗</span></a>
        <a className="email" href="mailto:pankaj@rutiletech.com">pankaj@rutiletech.com</a>
      </div>
    </div>
    <footer><div className="footer-inner"><span>Rutile Technologies, Inc.</span><span>© {new Date().getFullYear()}</span></div></footer>
  </main>
);

export default Index;
