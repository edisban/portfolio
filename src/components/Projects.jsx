export default function Projects() {
  const projects = [
    {
      title: "Certificate One",
      desc: "Learn React",
      link: "/Learn_React.pdf",
    },
    {
      title: "Certificate Two",
      desc: "Learn React Advanced",
      link: "/Learn_React_Advanced.pdf",
    },

  ];

  return (
    <section id="projects">
      <div className="kicker">Certificates</div>
      <h2>My certificates</h2>
      <p className="lead">
        Selected Online Course Certificates. Click to view details and the certificates.
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
                  View Certificate
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
