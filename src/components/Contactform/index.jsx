import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


// Component: ContactForm
// Description: Formulaire de contact utilisant EmailJS pour l'envoi d'emails
function ContactForm() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);


  // Envoi de l'email via EmailJS
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

      {/* Champ : Nom */}
      <div className="contact__form-group">
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="user_name" required />
      </div>

      {/* Champ : Email */}
      <div className="contact__form-group">
        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="reply_to" required />
      </div>

      {/* Champ : Message */}
      <div className="contact__form-group">
        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" rows="5" required />
      </div>

      {/* Bouton d'envoi */}
      <button type="submit" className="contact__submit">Envoyer</button>

      {/* Message de confirmation */}
      {messageSent && <p className="contact__confirmation">Merci pour votre message !</p>}
    </form>
  );
}

export default ContactForm;
