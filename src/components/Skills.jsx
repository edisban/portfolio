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
    ["HTML", "devicon-html5-plain colored", 60, "Basic"],
    ["CSS", "devicon-css3-plain colored", 55, "Basic"],
    ["JavaScript", "devicon-javascript-plain colored", 50, "Basic"],
    ["React", "devicon-react-original colored", 45, "Basic"],
    ["Next.js", "devicon-nextjs-original-wordmark", 40, "Basic"],
    ["SQL", "devicon-mysql-plain colored", 50, "Basic"],
    ["Power BI", "devicon-powerbi-plain colored", 40, "Basic"],
    ["Excel", "devicon-msdos-plain", 50, "Basic"],
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
