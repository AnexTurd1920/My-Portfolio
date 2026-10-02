import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandInstagram,
} from "@tabler/icons-react";
import profilePhoto from "../assets/profile-photo.svg";
import "../stylesheets/Home.css";
import { useLanguage } from "../LanguageContext";

function Home() {
  const { language } = useLanguage();
  const spanish = language === "es";

  return (
    <section id='home' className='Landing-Info'>
      <div className='Info-Holder'>
        <section>
          <h3>{spanish ? "¡Hola! Francisco está aquí..." : "Hi! Francisco's here..."}</h3>
          <h1>
            <span>Full-Stack</span>
          </h1>
          <h1>{spanish ? "Ingeniero de Software y Desarrollador" : "Software Engineer & Developer"}</h1>
          <p>
            {spanish
              ? "Creo soluciones de software excepcionales, limpias y modernas, con"
              : "Creating exceptional coding solutions with clean, modern, and"}
            <span>{spanish ? " funciones intuitivas" : " intuitive features"}</span>
            {spanish
              ? ", enfocadas en ofrecer experiencias digitales fluidas y convertir ideas en soluciones funcionales y de impacto."
              : ", focused on delivering seamless digital experiences and turning ideas into functional, impactful solutions."}
          </p>
        </section>
        <section>
          <a
            className='CV-Button'
            href={`${import.meta.env.BASE_URL}Francisco%C2%B4s%20CV.pdf`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {spanish ? "Descargar CV" : "Download CV"}
          </a>
        </section>
        <section className='Icon-Holder'>
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
        </section>
      </div>
      <div className='Photo-Holder'>
        <div className='Photo-Frame'>
          <img
            src={profilePhoto}
            alt={spanish ? "Foto de Francisco" : "Photo of Francisco"}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
