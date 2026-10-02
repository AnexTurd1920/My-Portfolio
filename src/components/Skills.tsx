import "../stylesheets/Skills.css";
import { useLanguage } from "../LanguageContext";

const skillGroups = {
  en: [
  {
    title: "Core Skills",
    tags: ["Full-Stack Dev", "System Design", "Problem Solving"],
  },
  {
    title: "Frontend Tech",
    tags: ["React", "JavaScript/TypeScript", "HTML", "CSS / Sass"],
  },
  {
    title: "Backend Tech",
    tags: ["Node.js", "REST APIs", "Databases", "PHP", "Python"],
  },
  {
    title: "Tools & Workflow",
    tags: ["Git", "Docker", "CI/CD"],
  },
  ],
  es: [
    { title: "Habilidades principales", tags: ["Desarrollo full-stack", "Diseño de sistemas", "Resolución de problemas"] },
    { title: "Tecnologías frontend", tags: ["React", "JavaScript/TypeScript", "HTML", "CSS / Sass"] },
    { title: "Tecnologías backend", tags: ["Node.js", "API REST", "Bases de datos", "PHP", "Python"] },
    { title: "Herramientas y flujo de trabajo", tags: ["Git", "Docker", "CI/CD"] },
  ],
};

function Skills() {
  const { language } = useLanguage();
  const spanish = language === "es";

  return (
    <section id='skills' className='Skills-Section'>
      <h2>{spanish ? "Habilidades" : "Skills"}</h2>
      <p className='Section-Subtitle'>
        {spanish ? "Creo soluciones full-stack fluidas y código limpio" : "Crafting seamless full-stack solutions and clean code"}
      </p>
      <div className='Skills-Grid'>
        {skillGroups[language].map((group) => (
          <div className='Skill-Card' key={group.title}>
            <h3>{group.title}</h3>
            <div className='Tag-List'>
              {group.tags.map((tag) => (
                <span className='Tag' key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
