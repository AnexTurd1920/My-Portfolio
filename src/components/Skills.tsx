import "../stylesheets/Skills.css";

const skillGroups = [
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
];

function Skills() {
  return (
    <section id='skills' className='Skills-Section'>
      <h2>Skills</h2>
      <p className='Section-Subtitle'>
        Crafting seamless full-stack solutions and clean code
      </p>
      <div className='Skills-Grid'>
        {skillGroups.map((group) => (
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
