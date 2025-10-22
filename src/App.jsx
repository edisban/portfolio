import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Profile />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
