import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import "../stylesheets/Projects.css";
import { useLanguage } from "../LanguageContext";

const projects = {
  en: [
  {
    title: "LightSense",
    description:
      "A renewable energy platform that integrates sustainable energy solutions with intelligent monitoring, enabling users to manage and track energy generation and consumption.",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Wexora",
    description:
      "A communication platform inspired by Discord, enhanced with additional tools and integrated AI to provide a more complete and intelligent communication experience.",
    tags: ["React", "TypeScript", "WebSockets"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Elysium",
    description:
      "An LMS platform with integrated AI, designed to improve academic communication and collaboration between teachers and students.",
    tags: ["Next.js", "Electron", "MongoDB"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "GYK Studios",
    description:
      "A multidisciplinary team of developers, cybersecurity specialists, and designers providing professional digital services and freelance solutions tailored to clients' needs.",
    tags: ["React", ".NET", "Express"],
    liveUrl: "#",
    codeUrl: "#",
  },
  ],
  es: [
    {
      title: "LightSense",
      description: "Plataforma de energía renovable que integra soluciones sostenibles con monitoreo inteligente para gestionar y hacer seguimiento a la generación y el consumo de energía.",
      tags: ["React", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Wexora",
      description: "Plataforma de comunicación inspirada en Discord, con herramientas adicionales e inteligencia artificial integrada para ofrecer una experiencia más completa e inteligente.",
      tags: ["React", "TypeScript", "WebSockets"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Elysium",
      description: "Plataforma LMS con inteligencia artificial integrada, diseñada para mejorar la comunicación y colaboración académica entre docentes y estudiantes.",
      tags: ["Next.js", "Electron", "MongoDB"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "GYK Studios",
      description: "Equipo multidisciplinario de desarrollo, ciberseguridad y diseño que ofrece servicios digitales profesionales y soluciones freelance adaptadas a cada cliente.",
      tags: ["React", ".NET", "Express"],
      liveUrl: "#",
      codeUrl: "#",
    },
  ],
};

function Projects() {
  const { language } = useLanguage();
  const spanish = language === "es";

  return (
    <section id='projects' className='Projects-Section'>
      <h2>{spanish ? "Proyectos" : "Projects"}</h2>
      <p className='Section-Subtitle'>
        {spanish ? "Una selección de proyectos que he creado recientemente" : "A selection of things I've built recently"}
      </p>

      <div className='Projects-Grid'>
        {projects[language].map((project) => (
          <div className='Project-Card' key={project.title}>
            <div className='Project-Thumb'>
              <span>{project.title.charAt(0)}</span>
            </div>
            <div className='Project-Body'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className='Tag-List'>
                {project.tags.map((tag) => (
                  <span className='Tag' key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className='Project-Links'>
                <a
                  href={project.liveUrl}
                  onClick={(event) => event.preventDefault()}
                  aria-label={spanish ? "Demo en vivo. Este proyecto aún está en desarrollo." : "Live demo. This project is still in development."}
                  data-tooltip={spanish ? "Este proyecto aún está en desarrollo" : "This project is still in development"}
                >
                  <IconExternalLink size={18} />
                  {spanish ? "Demo en vivo" : "Live Demo"}
                </a>
                <a
                  href={project.codeUrl}
                  onClick={(event) => event.preventDefault()}
                  aria-label={spanish ? "Código. Este proyecto aún está en desarrollo." : "Code. This project is still in development."}
                  data-tooltip={spanish ? "Este proyecto aún está en desarrollo" : "This project is still in development"}
                >
                  <IconBrandGithub size={18} />
                  {spanish ? "Código" : "Code"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
