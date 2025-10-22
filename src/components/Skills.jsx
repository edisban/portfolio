import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    const fills = document.querySelectorAll(".bar .fill");
    fills.forEach((el) => {
      const lvl = parseInt(el.dataset.level || "0", 10);
      setTimeout(() => (el.style.width = lvl + "%"), 300);
    });
  }, []);

  const skills = [
    ["HTML", "devicon-html5-plain colored", 70, "Intermediate"],
    ["CSS", "devicon-css3-plain colored", 65, "Intermediate"],
    ["JavaScript", "devicon-javascript-plain colored", 50, "Basic"],
    ["React", "devicon-react-original colored", 45, "Basic"],
    ["Python", "devicon-python-plain colored", 40, "Basic"],
    ["Java", "devicon-java-plain colored", 40, "Basic"],
    ["SQL", "devicon-mysql-plain colored", 65, "Intermediate"],
  ];

  return (
    <section id="skills">
      <div className="kicker">Skills</div>
      <h2>Technical Skills</h2>
      <div className="skills">
        {skills.map(([name, icon, level, label]) => (
          <div key={name} className="skill">
            <h4>
              {icon && <i className={icon}></i>} {name}
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
