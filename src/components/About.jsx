export default function About() {
  return (
    <section id="about" className="hero">
      <div className="card">
        <div className="kicker">About</div>

        <h2>Full-Stack Engineer & Systems Architect</h2>

        <p className="lead">
          I'm a <strong>full-stack engineer</strong> who treats every project like a distributed
          system—designing resilient architectures, planning for scalability, and weaving modern
          DevOps practices directly into delivery. I pair <strong>React</strong> experiences with
          <strong> Spring Boot</strong> services that are observable, secure, and tuned for growth.
        </p>

        <p className="lead">
          Recently I've been containerizing multi-service stacks with <strong>Docker & Docker
          Compose</strong> (React, Spring Boot, <strong>PostgreSQL</strong>, <strong>Redis</strong>)
          to keep environments identical from laptop to prod. I lean on <strong>Redis</strong> for
          strategic caching and JWT blacklisting, version databases with <strong>Flyway</strong>,
          automate CI/CD through <strong>GitHub Actions</strong>, and back it all with
          <strong> Vitest + React Testing Library</strong> suites so performance optimizations are
          safe and measurable.
        </p>

        <div className="badges">
          <span className="badge">React</span>
          <span className="badge">Java</span>
          <span className="badge">Spring Boot</span>
          <span className="badge">PostgreSQL</span>
          <span className="badge">Docker & Compose</span>
          <span className="badge">Redis Caching</span>
          <span className="badge">Flyway Migrations</span>
          <span className="badge">CI/CD · GitHub Actions</span>
          <span className="badge">Vitest · React Testing Library</span>
        </div>
      </div>
    </section>
  );
}
