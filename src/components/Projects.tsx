import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import "../stylesheets/Projects.css";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack online store with product catalog, cart, secure checkout, and an admin dashboard for managing orders.",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task board with drag-and-drop columns, real-time updates, and team workspaces.",
    tags: ["React", "TypeScript", "WebSockets"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "A lightweight content management system that lets creatives update their portfolio without touching code.",
    tags: ["Next.js", "REST API", "MongoDB"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "An interactive dashboard visualizing key business metrics with filterable charts and exportable reports.",
    tags: ["React", "D3.js", "Express"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="Projects-Section">
      <h2>Projects</h2>
      <p className="Section-Subtitle">
        A selection of things I've built recently
      </p>

      <div className="Projects-Grid">
        {projects.map((project) => (
          <div className="Project-Card" key={project.title}>
            <div className="Project-Thumb">
              <span>{project.title.charAt(0)}</span>
            </div>
            <div className="Project-Body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="Tag-List">
                {project.tags.map((tag) => (
                  <span className="Tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="Project-Links">
                <a href={project.liveUrl} aria-label="Live demo">
                  <IconExternalLink size={18} />
                  Live Demo
                </a>
                <a href={project.codeUrl} aria-label="Source code">
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
