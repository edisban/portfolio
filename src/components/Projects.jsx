export default function Projects() {
  const projects = [
    {
      title: "Project One",
      desc: "A modern, responsive web project showcasing clean design and interaction.",
      link: "certificates/Learn React.pdf",
    },
    {
      title: "Project Two",
      desc: "Another example of creative UI and problem-solving through modern tools.",
      link: "/certificates/Learn React Advanced.pdf.",
    },
    {
      title: "Project Three",
      desc: "An interactive project demonstrating functionality and good UX practices.",
      link: "#",
    },
  ];

  return (
    <section id="projects">
      <div className="kicker">Projects</div>
      <h2>My Projects</h2>
      <p className="lead">
        A selection of recent work. Click to explore each project in detail.
      </p>

      <div className="grid">
        {projects.map((p, i) => (
          <article key={i} className="project">
            <div className="body">
              <h3>{p.title}</h3>
              <p className="lead" style={{ fontSize: "15px" }}>
                {p.desc}
              </p>
              <div className="links" style={{ marginTop: "10px" }}>
                <a
                  className="btn"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
