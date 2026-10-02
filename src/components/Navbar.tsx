import "../stylesheets/Navbar.css";
import { useLanguage } from "../LanguageContext";

interface NavbarProps {
  activeSection: string;
}

function Navbar({ activeSection }: NavbarProps) {
  const { language, setLanguage } = useLanguage();
  const spanish = language === "es";

  return (
    <nav>
      <section
        className='Language-Switch'
        aria-label={spanish ? "Idioma" : "Language"}
      >
        <button
          type='button'
          aria-pressed={language === "en"}
          onClick={() => setLanguage("en")}
        >
          EN
        </button>
        <button
          type='button'
          aria-pressed={language === "es"}
          onClick={() => setLanguage("es")}
        >
          ES
        </button>
      </section>
      <section className='Links-Section'>
        <ul>
          <li>
            <a
              href='#home'
              className={activeSection === "home" ? "active" : ""}
            >
              {spanish ? "Inicio" : "Home"}
            </a>
          </li>
          <li>
            <a
              href='#services'
              className={activeSection === "services" ? "active" : ""}
            >
              {spanish ? "Servicios" : "Services"}
            </a>
          </li>
          <li>
            <a
              href='#about'
              className={activeSection === "about" ? "active" : ""}
            >
              {spanish ? "Sobre mí" : "About"}
            </a>
          </li>
          <li>
            <a
              href='#skills'
              className={activeSection === "skills" ? "active" : ""}
            >
              {spanish ? "Habilidades" : "Skills"}
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className={activeSection === "projects" ? "active" : ""}
            >
              {spanish ? "Proyectos" : "Projects"}
            </a>
          </li>
        </ul>
      </section>
      <section>
        <a href='#contact' className='Nav-Buttons'>
          {spanish ? "Hablemos" : "Let's Talk!"}
        </a>
      </section>
    </nav>
  );
}

export default Navbar;
