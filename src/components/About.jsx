export default function About() {
  return (
    <section id="about" className="hero">
      <div className="card">
        <div className="kicker">About</div>
        <h2>Applied Informatics Graduate — Front-End Developer & Data Analyst</h2>
        <p className="lead">
          Enthusiastic and motivated Applied Informatics graduate, eager to
          learn and grow through hands-on experience. Passionate about building
          clean and user-friendly front-end applications, analyzing data, and
          improving my skills in modern technologies.
        </p>

        <div className="badges">
          <span className="badge">Front-End</span>
          <span className="badge">Data Analysis</span>
          <span className="badge">UI/UX</span>
          <span className="badge">Visualization</span>
        </div>

        <div style={{ marginTop: "18px" }}>
          <strong>Links</strong>
          <div className="socials">
            <a className="btn" href="https://www.instagram.com/edis_bantak/" target="_blank">Instagram</a>
            <a className="btn" href="https://github.com/edisban" target="_blank">GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/edis-bantak-26a2a0375/" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
