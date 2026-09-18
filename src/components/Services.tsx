import "../stylesheets/Services.css";

const services = [
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
];

function Services() {
  return (
    <section id="services" className="Services-Section">
      <h2>Services</h2>
      <p className="Section-Subtitle">
        Designing clean, scalable, full-stack solutions
      </p>
      <div className="Services-Grid">
        {services.map((service) => (
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
