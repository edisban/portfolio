import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    const fills = document.querySelectorAll(".bar .fill");

    if (!("IntersectionObserver" in window)) {
      fills.forEach((el) => {
        const lvl = parseInt(el.dataset.level || "0", 10);
        el.style.width = lvl + "%";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const lvl = parseInt(el.dataset.level || "0", 10);
            el.style.width = lvl + "%";
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.25 }
    );

    fills.forEach((el) => {
      el.style.width = "0";
      observer.observe(el);
    });
  }, []);

  const skillGroups = [
    {
      title: "Frontend Engineering",
      items: [
        { name: "React", icon: "devicon-react-original colored", level: 90, label: "Advanced" },
        {
          name: "TypeScript",
          icon: "devicon-typescript-plain colored",
          level: 80,
          label: "Advanced",
        },
        {
          name: "JavaScript",
          icon: "devicon-javascript-plain colored",
          level: 85,
          label: "Advanced",
        },
        { name: "HTML", icon: "devicon-html5-plain colored", level: 80, label: "Advanced" },
        { name: "CSS", icon: "devicon-css3-plain colored", level: 78, label: "Advanced" },
        {
          name: "Testing (Vitest + React Testing Library)",
          icon: "",
          level: 75,
          label: "Robust suites",
        },
      ],
    },
    {
      title: "Backend & Data Platforms",
      items: [
        { name: "Spring Boot", icon: "devicon-spring-plain colored", level: 88, label: "Advanced" },
        { name: "Java", icon: "devicon-java-plain colored", level: 85, label: "Advanced" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", level: 85, label: "Advanced" },
        { name: "Redis", icon: "devicon-redis-plain colored", level: 80, label: "Caching & JWT" },
        { name: "Flyway", icon: "", level: 72, label: "Versioned migrations" },
      ],
    },
    {
      title: "DevOps & Tools",
      items: [
        {
          name: "Docker & Docker Compose",
          icon: "devicon-docker-plain colored",
          level: 85,
          label: "Multi-service shipping",
        },
        { name: "CI/CD (GitHub Actions)", icon: "devicon-github-original", level: 78, label: "Automated pipelines" },
        { name: "Git", icon: "devicon-git-plain colored", level: 85, label: "Team workflows" },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="kicker">Skills</div>
      <h2>Technical Skills</h2>
      {skillGroups.map((group) => (
        <div key={group.title} className="skills-group">
          <h3>{group.title}</h3>
          <div className="skills">
            {group.items.map(({ name, icon, level, label }) => (
              <div key={name} className="skill">
                <h4>
                  {icon && <i className={icon} style={{ fontSize: "22px" }}></i>} {name}
                </h4>
                <div className="bar">
                  <span className="fill" data-level={level}></span>
                </div>
                <small>{label}</small>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
