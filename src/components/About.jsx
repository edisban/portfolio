export default function About() {
  return (
    <section id="about" className="hero">
      <div className="card">
        <div className="kicker">About</div>

        <h2>Junior React Developer</h2>

        <p className="lead">
          I'm a <strong>final-year Applied Informatics student</strong> passionate about building
          clean, performant, and user-friendly web applications. My focus is on 
          <strong> React</strong> and <strong>Next.js</strong>, crafting responsive and
          accessible interfaces with modern tools and best practices.
        </p>

        <p className="lead">
          I'm constantly improving my skills in <strong>front-end performance</strong>,
          component architecture, and exploring the fundamentals of
          <strong> full-stack development</strong> — learning how to integrate front and back
          for complete, scalable web solutions.
        </p>

        <div className="badges">
          <span className="badge">React</span>
          <span className="badge">Next.js</span>
          <span className="badge">Front-End</span>
          <span className="badge">UI/UX</span>
          <span className="badge">SQL</span>
        </div>

        <div style={{ marginTop: "18px" }}>
          <strong>Links</strong>
          <div className="socials">
            <a className="btn" href="https://www.instagram.com/edis_bantak/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className="btn" href="https://github.com/edisban" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="btn" href="https://www.linkedin.com/in/edis-bantak-26a2a0375/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
