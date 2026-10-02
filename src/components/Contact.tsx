import { useState } from "react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandWhatsapp,
  IconBrandInstagram,
} from "@tabler/icons-react";
import "../stylesheets/Contact.css";
import { useLanguage } from "../LanguageContext";

function Contact() {
  const { language } = useLanguage();
  const spanish = language === "es";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formError, setFormError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setFormError(
        spanish
          ? "Completa tu nombre, correo electrónico y mensaje."
          : "Enter your name, email address, and message.",
      );
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus("error");
      setFormError(
        spanish ? "Escribe un formato de correo válido." : "Enter a valid email address.",
      );
      return;
    }

    setStatus("sending");
    setFormError("");
    try {
      const response = await fetch("https://formsubmit.co/ajax/franmesacev@outlook.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _replyto: email,
          _subject: subject || (spanish ? "Nuevo mensaje del portafolio" : "New message from portfolio"),
        }),
      });
      const result = (await response.json()) as {
        success?: string | boolean;
        message?: string;
      };
      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error(result.message || "Request failed");
      }
      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      console.error("Contact form submission failed", error);
      setFormError(
        spanish
          ? "No se pudo enviar el mensaje. Inténtalo de nuevo."
          : "Could not send the message. Please try again.",
      );
    }
  }

  return (
    <section id='contact' className='Contact-Section'>
      <h2>{spanish ? "¡Contáctame!" : "Contact Me!"}</h2>
      <p className='Section-Subtitle'>
        {spanish ? "¿Tienes un proyecto en mente? Hagamos algo increíble." : "Have a project in mind? Let's build something great together"}
      </p>

      <div className='Contact-Grid'>
        <div className='Contact-Info'>
          <div className='Contact-Item'>
            <span className='Contact-Icon'>
              <IconMail size={18} />
            </span>
            <div>
              <h4>{spanish ? "Correo" : "Email"}</h4>
              <p>franmesacev@outlook.com</p>
            </div>
          </div>
          <div className='Contact-Item'>
            <span className='Contact-Icon'>
              <IconPhone size={18} />
            </span>
            <div>
              <h4>{spanish ? "Teléfono" : "Phone"}</h4>
              <p>+1 (849) 362-8120</p>
            </div>
          </div>
          <div className='Contact-Item'>
            <span className='Contact-Icon'>
              <IconMapPin size={18} />
            </span>
            <div>
              <h4>{spanish ? "Ubicación" : "Location"}</h4>
              <p>{spanish ? "Santo Domingo, República Dominicana" : "Santo Domingo, Dominican Republic"}</p>
            </div>
          </div>

          <div className='Contact-Socials'>
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

        <form
          className='Contact-Form'
          noValidate
          onSubmit={handleSubmit}
          onChange={() => {
            if (status === "sent" || status === "error") setStatus("idle");
            setFormError("");
          }}
        >
          <div className='Form-Row'>
            <div className='Form-Field'>
              <label htmlFor='name'>{spanish ? "Nombre" : "Name"}</label>
              <input
                id='name'
                name='name'
                type='text'
                placeholder={spanish ? "Tu nombre" : "Your name"}
              />
            </div>
            <div className='Form-Field'>
              <label htmlFor='email'>{spanish ? "Correo electrónico" : "Email"}</label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder={spanish ? "tu@correo.com" : "you@email.com"}
              />
            </div>
          </div>
          <div className='Form-Field'>
            <label htmlFor='subject'>{spanish ? "Asunto" : "Subject"}</label>
            <input
              id='subject'
              name='subject'
              type='text'
              placeholder={spanish ? "¿De qué trata tu mensaje?" : "What's this about?"}
            />
          </div>
          <div className='Form-Field'>
            <label htmlFor='message'>{spanish ? "Mensaje" : "Message"}</label>
            <textarea
              id='message'
              name='message'
              rows={5}
              placeholder={spanish ? "Cuéntame sobre tu proyecto..." : "Tell me about your project..."}
            />
          </div>
          <button type='submit' disabled={status === "sending" || status === "sent"}>
            {status === "sending"
              ? spanish ? "Enviando..." : "Sending..."
              : status === "sent"
                ? spanish ? "¡Mensaje enviado!" : "Message Sent!"
                : spanish ? "Enviar mensaje" : "Send Message"}
          </button>
          {formError && (
            <p className='Contact-Form-Status error' role='alert'>
              {formError}
            </p>
          )}
          {status === "sent" && (
            <p className='Contact-Form-Status sent' role='status' aria-live='polite'>
              {spanish ? "Gracias, tu mensaje fue enviado." : "Your message has been sent. Thank you."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
