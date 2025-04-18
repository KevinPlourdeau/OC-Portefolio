import React from "react";
import ContactForm from "@components/Contactform";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Me contacter</h2>
      <div className="contact__container">
        <div className="contact__left">
        <div className="contact__box">
          <h3><i class="fa-regular fa-user"></i></h3>
            <p>
              <a href="/MonCV.pdf" download>
                Télécharger mon CV
              </a>
            </p>
          </div>
          <div className="contact__box">
            <h3><i class="fa-solid fa-envelope"></i></h3>
            <p><a href="mailto:kevin.plourdeau@gmail.com">kevin.plourdeau@gmail.com</a></p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;