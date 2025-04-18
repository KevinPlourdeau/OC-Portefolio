import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          alert("Erreur lors de l'envoi : " + error.text);
        }
      );
  };

  return (
    <form ref={form} className="contact__form" onSubmit={sendEmail}>
      <p>
        Contactez-moi avant que je ne devienne célèbre.{" "}
        <i className="fa-solid fa-face-smile"></i>
      </p>

      <div className="contact__form-group">
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="user_name" required />
      </div>

      <div className="contact__form-group">
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="user_email" required />
      </div>

      <div className="contact__form-group">
        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" rows="5" required />
      </div>

      <button type="submit" className="contact__submit">Envoyer</button>

      {messageSent && <p className="contact__confirmation">Merci pour votre message !</p>}
    </form>
  );
}

export default ContactForm;
