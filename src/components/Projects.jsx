export default function Projects() {
  return (
    <section id="projects">
      <div className="kicker">Projects</div>
      <h2>Selected Projects</h2>

      <div className="grid">
        <article className="project">
          <div className="body">
            <h3>Responsive UI Dashboard</h3>
            <p className="lead" style={{ fontSize: "15px" }}>
              Example Front-End Project — coming soon.
            </p>
            <div className="tags">
              <span className="tag">Front-End</span>
              <span className="tag">UI</span>
            </div>
          </div>
        </article>

        <article className="project">
          <div className="body">
            <h3>Data Visualization Dashboard</h3>
            <p className="lead" style={{ fontSize: "15px" }}>
              Example Data Analysis project with charts and insights.
            </p>
            <div className="tags">
              <span className="tag">Python</span>
              <span className="tag">Visualization</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
