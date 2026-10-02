import "../stylesheets/About.css";
import { useLanguage } from "../LanguageContext";

const approach = {
  en: [
  { number: "01", label: "Understand goals & requirements" },
  { number: "02", label: "Design & build clean systems" },
  { number: "03", label: "Ship reliable, scalable products" },
  ],
  es: [
    { number: "01", label: "Comprender objetivos y requisitos" },
    { number: "02", label: "Diseñar y crear sistemas claros" },
    { number: "03", label: "Entregar productos confiables y escalables" },
  ],
};

const stats = {
  en: [
  { value: "02+", label: "Years Of Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "05+", label: "Clients Served" },
  ],
  es: [
    { value: "02+", label: "Años de experiencia" },
    { value: "15+", label: "Proyectos completados" },
    { value: "05+", label: "Clientes atendidos" },
  ],
};

function About() {
  const { language } = useLanguage();
  const spanish = language === "es";

  return (
    <section id="about" className="About-Section">
      <h2>{spanish ? "Sobre mí" : "About Me"}</h2>
      <p className="About-Text">
        {spanish
          ? "Soy desarrollador full-stack y me apasiona crear experiencias digitales limpias, intuitivas y escalables. Me enfoco en convertir ideas en productos fluidos al comprender las necesidades de las personas, diseñar sistemas sólidos y garantizar un rendimiento óptimo en toda la plataforma."
          : "I'm a full-stack developer passionate about crafting clean, intuitive, and scalable digital experiences. I focus on turning ideas into seamless products by understanding user needs, architecting solid systems, and ensuring smooth performance across the stack."}
      </p>

      <h3 className="Approach-Title">{spanish ? "Mi enfoque" : "My Approach"}</h3>
      <div className="Approach-Grid">
        {approach[language].map((step) => (
          <div className="Approach-Card" key={step.number}>
            <span className="Approach-Number">{step.number}</span>
            <span>{step.label}</span>
          </div>
        ))}
      </div>

      <div className="Stats-Grid">
        {stats[language].map((stat) => (
          <div className="Stat-Card" key={stat.label}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
