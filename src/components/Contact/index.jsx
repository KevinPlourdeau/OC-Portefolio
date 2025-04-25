import React from "react";
import ContactForm from "@components/Contactform";
import DownloadButton from "@components/handleDownload";

// Component: Contact
// Description: Contact section with downloadable CV and contact form
function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Me contacter</h2>
      <div className="contact__container">
        
        {/* Coordonnées et téléchargement de CV */}
        <div className="contact__left">
        <div className="contact__box">
          <h3><i className="fa-regular fa-user"></i></h3>
            <p>
              <DownloadButton
                filePath={`${import.meta.env.BASE_URL}CV_Plourdeau_Kevin.pdf`}
                fileName="CV_Plourdeau_Kevin.pdf"
              >
                Télécharger mon CV
              </DownloadButton>
            </p>
          </div>
          <div className="contact__box">
            <h3><i className="fa-solid fa-envelope"></i></h3>
            <p><a href="mailto:kevin.plourdeau@gmail.com">kevin.plourdeau@gmail.com</a></p>
          </div>
        </div>

        {/* Formulaire de contact */}
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;