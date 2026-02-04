import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Αλλάζει το theme και το αποθηκεύει
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Κλείνει το mobile menu όταν αλλάζει μέγεθος οθόνης
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header>
      <nav className="nav">
        <div className="brand">
          <div className="logo"></div>
          <h1>Portfolio Edis Bandak</h1>
        </div>

        {/* Desktop menu */}
        <div className="menu">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙" : "🌓"}
          </button>

          {/* Μόνο View CV */}
          <a
            href="/EDIS_BANTAK_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
          >
            View CV
          </a>
        </div>

        {/* Burger button */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </nav>

      {/* Mobile panel */}
      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#education" onClick={() => setOpen(false)}>
          Education
        </a>
        <a href="#skills" onClick={() => setOpen(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
        {/* Μόνο View CV και στο mobile */}
        <a
          href="/EDIS_BANTAK_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          View CV
        </a>
      </div>
    </header>
  );
}
