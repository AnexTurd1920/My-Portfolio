import "../stylesheets/About.css";

const approach = [
  { number: "01", label: "Understand goals & requirements" },
  { number: "02", label: "Design & build clean systems" },
  { number: "03", label: "Ship reliable, scalable products" },
];

const stats = [
  { value: "02+", label: "Years Of Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "05+", label: "Clients Served" },
];

function About() {
  return (
    <section id="about" className="About-Section">
      <h2>About Me</h2>
      <p className="About-Text">
        I'm a full-stack developer passionate about crafting clean,
        intuitive, and scalable digital experiences. I focus on turning
        ideas into seamless products by understanding user needs,
        architecting solid systems, and ensuring smooth performance across
        the stack.
      </p>

      <h3 className="Approach-Title">My Approach</h3>
      <div className="Approach-Grid">
        {approach.map((step) => (
          <div className="Approach-Card" key={step.number}>
            <span className="Approach-Number">{step.number}</span>
            <span>{step.label}</span>
          </div>
        ))}
      </div>

      <div className="Stats-Grid">
        {stats.map((stat) => (
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
