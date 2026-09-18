import { useState } from "react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import "../stylesheets/Contact.css";

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    // Hook this up to your email service / backend of choice
    // (e.g. Formspree, EmailJS, or your own API endpoint).
    setStatus("sent");
  }

  return (
    <section id='contact' className='Contact-Section'>
      <h2>Contact Me</h2>
      <p className='Section-Subtitle'>
        Have a project in mind? Let's build something great together
      </p>

      <div className='Contact-Grid'>
        <div className='Contact-Info'>
          <div className='Contact-Item'>
            <span className='Contact-Icon'>
              <IconMail size={18} />
            </span>
            <div>
              <h4>Email</h4>
              <p>franmesacev@outlook.com</p>
            </div>
          </div>
          <div className='Contact-Item'>
            <span className='Contact-Icon'>
              <IconPhone size={18} />
            </span>
            <div>
              <h4>Phone</h4>
              <p>+1 (849) 362-8120</p>
            </div>
          </div>
          <div className='Contact-Item'>
            <span className='Contact-Icon'>
              <IconMapPin size={18} />
            </span>
            <div>
              <h4>Location</h4>
              <p>Santo Domingo, Dominican Republic</p>
            </div>
          </div>

          <div className='Contact-Socials'>
            <a href='#' aria-label='LinkedIn'>
              <IconBrandLinkedin />
            </a>
            <a href='#' aria-label='GitHub'>
              <IconBrandGithub />
            </a>
          </div>
        </div>

        <form className='Contact-Form' onSubmit={handleSubmit}>
          <div className='Form-Row'>
            <div className='Form-Field'>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                name='name'
                type='text'
                placeholder='Your name'
                required
              />
            </div>
            <div className='Form-Field'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='you@email.com'
                required
              />
            </div>
          </div>
          <div className='Form-Field'>
            <label htmlFor='subject'>Subject</label>
            <input
              id='subject'
              name='subject'
              type='text'
              placeholder="What's this about?"
            />
          </div>
          <div className='Form-Field'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              name='message'
              rows={5}
              placeholder='Tell me about your project...'
              required
            />
          </div>
          <button type='submit'>
            {status === "sent" ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
