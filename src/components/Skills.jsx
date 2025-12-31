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

  const skills = [
    ["React", "devicon-react-original colored", 70, "Intermediate"],
    ["TypeScript", "devicon-typescript-plain colored", 70, "Intermediate"],
    ["Java", "devicon-java-plain colored", 70, "Intermediate"],
    ["Spring Boot", "devicon-spring-plain colored", 70, "Intermediate"],
    ["PostgreSQL", "devicon-postgresql-plain colored", 70, "Intermediate"],
    ["JavaScript", "devicon-javascript-plain colored", 70, "Intermediate"],
    ["HTML", "devicon-html5-plain colored", 70, "Intermediate"],
    ["CSS", "devicon-css3-plain colored", 70, "Intermediate"],
    ["Git", "devicon-git-plain colored", 70, "Intermediate"],
  ];

  return (
    <section id="skills">
      <div className="kicker">Skills</div>
      <h2>Technical Skills</h2>
      <div className="skills">
        {skills.map(([name, icon, level, label]) => (
          <div key={name} className="skill">
            <h4>
              {icon && <i className={icon} style={{ fontSize: "22px" }}></i>}{" "}
              {name}
            </h4>
            <div className="bar">
              <span className="fill" data-level={level}></span>
            </div>
            <small>{label}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
