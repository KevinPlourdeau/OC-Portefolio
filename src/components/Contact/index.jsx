import React from "react";
import ContactForm from "@components/Contactform";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Me contacter</h2>
      <div className="contact__container">
        <div className="contact__left">
        <div className="contact__box">
            <h3>Mon Cv</h3>
            <p>
              <a href="/MonCV.pdf" download>
                télécharger en cliquant ici
              </a>
            </p>
          </div>
          <div className="contact__box">
            <h3>Information de contact</h3>
            <p>kevin.plourdeau@gmail.com</p>
          </div>
          
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;