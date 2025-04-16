import React from "react";

function ContactForm() {
  return (
    <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
      <div className="contact__form-group">
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className="contact__form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="contact__form-group">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required />
      </div>

      <button type="submit" className="contact__submit">Envoi</button>
    </form>
  );
}

export default ContactForm;
