import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import "../stylesheets/Projects.css";

const projects = [
  {
    title: "LightSense",
    description:
      "A renewable energy platform that integrates sustainable energy solutions with intelligent monitoring, enabling users to manage and track energy generation and consumption.",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Elysium",
    description:
      "A communication platform inspired by Discord, enhanced with additional tools and integrated AI to provide a more complete and intelligent communication experience.",
    tags: ["React", "TypeScript", "WebSockets"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Wexora",
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
];

function Projects() {
  return (
    <section id='projects' className='Projects-Section'>
      <h2>Projects</h2>
      <p className='Section-Subtitle'>
        A selection of things I've built recently
      </p>

      <div className='Projects-Grid'>
        {projects.map((project) => (
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
                <a href={project.liveUrl} aria-label='Live demo'>
                  <IconExternalLink size={18} />
                  Live Demo
                </a>
                <a href={project.codeUrl} aria-label='Source code'>
                  <IconBrandGithub size={18} />
                  Code
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
