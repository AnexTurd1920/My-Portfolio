import "../stylesheets/Navbar.css";

interface NavbarProps {
  activeSection: string;
}

function Navbar({ activeSection }: NavbarProps) {
  return (
    <nav>
      <a href='#home' className='Logo'>
        EN
      </a>
      <section className='Links-Section'>
        <ul>
          <li>
            <a
              href='#home'
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#services'
              className={activeSection === "services" ? "active" : ""}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href='#about'
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#skills'
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className={activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
        </ul>
      </section>
      <section>
        <a href="#contact" className=' Nav-Buttons'>Let's Talk!</a>
      </section>
    </nav>
  );
}

export default Navbar;
