import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconPhone,
  IconMapPin,
} from "@tabler/icons-react";
import "../stylesheets/Footer.css";

function Footer() {
  return (
    <footer>
      <div className='Footer-Grid'>
        <div className='Footer-Brand'>
          <a href='#home' className='Logo'>
            FR
          </a>
          <p>
            Full-Stack Software Engineer crafting clean, modern, and intuitive
            digital experiences from front to back.
          </p>
          <div className='Footer-Icons'>
            <a
              href='https://www.linkedin.com/in/francisco-mesa-acevedo-1217b6384/'
              aria-label='LinkedIn'
              target='_blank'
            >
              <IconBrandLinkedin />
            </a>
            <a
              href='https://github.com/AnexTurd1920'
              aria-label='GitHub'
              target='_blank'
            >
              <IconBrandGithub />
            </a>
          </div>
        </div>

        <div className='Footer-Column'>
          <h4>Quick Links</h4>
          <a href='#home'>Home</a>
          <a href='#services'>Services</a>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
        </div>

        <div className='Footer-Column'>
          <h4>Contact Info</h4>
          <span className='Footer-Contact-Item'>
            <IconMail size={16} /> franmesacev@outlook.com
          </span>
          <span className='Footer-Contact-Item'>
            <IconPhone size={16} /> +1 (849) 362-8120
          </span>
          <span className='Footer-Contact-Item'>
            <IconMapPin size={16} /> Santo Domingo, Dominican Republic
          </span>
          <a href='#contact'>Send a message →</a>
        </div>
      </div>

      <div className='Footer-Bottom'>
        <p>© {new Date().getFullYear()} Francisco. All rights reserved.</p>
        <p>Built with React &amp; TypeScript</p>
      </div>
    </footer>
  );
}

export default Footer;
