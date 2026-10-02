import { useEffect, useState } from "react";
import "./stylesheets/App.css";
import { LanguageContext, type Language } from "./LanguageContext";

import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import Services from "./components/Services.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <>
        <Navbar activeSection={activeSection} />

        <Home />
        <Services />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    </LanguageContext.Provider>
  );
}

export default App;
