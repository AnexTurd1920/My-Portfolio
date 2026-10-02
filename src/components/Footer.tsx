import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";
import "../stylesheets/Footer.css";
import { useLanguage } from "../LanguageContext";

function Footer() {
  const { language } = useLanguage();
  const spanish = language === "es";

  return (
    <footer>
      <div className='Footer-Grid'>
        <div className='Footer-Brand'>
          <p>
            {spanish
              ? "Ingeniero de software full-stack que crea experiencias digitales limpias, modernas e intuitivas de principio a fin."
              : "Full-Stack Software Engineer crafting clean, modern, and intuitive digital experiences from front to back."}
          </p>
          <div className='Footer-Icons'>
            <a
              href='https://www.linkedin.com/in/francisco-mesa-acevedo-1217b6384/'
              aria-label='LinkedIn'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconBrandLinkedin />
            </a>
            <a
              href='https://github.com/AnexTurd1920'
              aria-label='GitHub'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconBrandGithub />
            </a>
            <a
              href='https://wa.me/18493628120'
              aria-label='WhatsApp'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconBrandWhatsapp />
            </a>
            <a
              href='https://www.instagram.com/franciscodev__/'
              aria-label='Instagram'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconBrandInstagram />
            </a>
          </div>
        </div>

        <div className='Footer-Column'>
          <h4>{spanish ? "Enlaces rápidos" : "Quick Links"}</h4>
          <a href='#home'>{spanish ? "Inicio" : "Home"}</a>
          <a href='#services'>{spanish ? "Servicios" : "Services"}</a>
          <a href='#about'>{spanish ? "Sobre mí" : "About"}</a>
          <a href='#skills'>{spanish ? "Habilidades" : "Skills"}</a>
          <a href='#projects'>{spanish ? "Proyectos" : "Projects"}</a>
        </div>

        <div className='Footer-Column'>
          <h4>{spanish ? "Información de contacto" : "Contact Info"}</h4>
          <span className='Footer-Contact-Item'>
            <IconMail size={16} /> franmesacev@outlook.com
          </span>
          <span className='Footer-Contact-Item'>
            <IconPhone size={16} /> +1 (849) 362-8120
          </span>
          <span className='Footer-Contact-Item'>
            <IconMapPin size={16} /> {spanish ? "Santo Domingo, República Dominicana" : "Santo Domingo, Dominican Republic"}
          </span>
          <a href='#contact'>{spanish ? "Envíame un mensaje →" : "Send a message →"}</a>
        </div>
      </div>

      <div className='Footer-Bottom'>
        <p>© {new Date().getFullYear()} Francisco. {spanish ? "Todos los derechos reservados." : "All rights reserved."}</p>
        <p>{spanish ? "Hecho con React y TypeScript" : "Built with React & TypeScript"}</p>
      </div>
    </footer>
  );
}

export default Footer;
