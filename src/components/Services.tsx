import "../stylesheets/Services.css";
import { useLanguage } from "../LanguageContext";

const services = {
  en: [
  {
    title: "UI/UX Website Design",
    description:
      "Clean, user-focused layouts with clear structure, smooth navigation, and strong visual hierarchy.",
    tags: ["Modern layouts", "Responsive design"],
  },
  {
    title: "Frontend Development",
    description:
      "Responsive interfaces built with React and TypeScript for clean, consistent, reliable performance.",
    tags: ["React & TS", "Component-driven"],
  },
  {
    title: "Backend & APIs",
    description:
      "Robust server-side logic and RESTful APIs designed for scalability, security, and maintainability.",
    tags: ["Node.js", "REST APIs"],
  },
  {
    title: "Performance & Deployment",
    description:
      "Fast, optimized builds with dependable CI/CD pipelines for smooth, production-ready releases.",
    tags: ["CI/CD", "Optimization"],
  },
  ],
  es: [
    {
      title: "Diseño web UI/UX",
      description: "Diseños limpios y centrados en las personas, con estructura clara, navegación fluida y una jerarquía visual sólida.",
      tags: ["Diseños modernos", "Diseño adaptable"],
    },
    {
      title: "Desarrollo frontend",
      description: "Interfaces adaptables con React y TypeScript, con un rendimiento limpio, consistente y confiable.",
      tags: ["React y TS", "Basado en componentes"],
    },
    {
      title: "Backend y API",
      description: "Lógica robusta del lado del servidor y API REST diseñadas para ser escalables, seguras y fáciles de mantener.",
      tags: ["Node.js", "API REST"],
    },
    {
      title: "Rendimiento y despliegue",
      description: "Compilaciones rápidas y optimizadas con flujos CI/CD confiables para publicar versiones listas para producción.",
      tags: ["CI/CD", "Optimización"],
    },
  ],
};

function Services() {
  const { language } = useLanguage();
  const spanish = language === "es";
  const localizedServices = services[language];

  return (
    <section id="services" className="Services-Section">
      <h2>{spanish ? "Servicios" : "Services"}</h2>
      <p className="Section-Subtitle">
        {spanish ? "Diseño de soluciones full-stack limpias y escalables" : "Designing clean, scalable, full-stack solutions"}
      </p>
      <div className="Services-Grid">
        {localizedServices.map((service) => (
          <div className="Service-Card" key={service.title}>
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="Tag-List">
              {service.tags.map((tag) => (
                <span className="Tag" key={tag}>
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

export default Services;
