export default function About() {
  return (
    <section id="about" className="hero">
      <div className="card">
        <div className="kicker">About</div>

        <h2>React & Java Developer</h2>

        <p className="lead">
          I'm a <strong>final-year Applied Informatics student</strong> building clean, performant
          web apps. On the front-end I work with <strong>React</strong> to ship responsive,
          accessible interfaces, and on the back-end I use <strong>Java</strong> with
          <strong> Spring Boot</strong> to craft reliable APIs.
        </p>

        <p className="lead">
          I love end-to-end delivery: modeling data in <strong>PostgreSQL</strong>, wiring REST
          endpoints with <strong>JWT authentication</strong>, and polishing the UI so it feels fast
          and intuitive. I'm always iterating on performance, testing, and clean architecture to
          keep projects scalable.
        </p>

        <div className="badges">
          <span className="badge">React</span>
          <span className="badge">Java</span>
          <span className="badge">Spring Boot</span>
          <span className="badge">PostgreSQL</span>
          <span className="badge">REST APIs</span>
          <span className="badge">JWT Auth</span>
        </div>
      </div>
    </section>
  );
}
