import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import projetsData from '@datas/Projects/Projets.json';

import ImageModal from "@components/Modale";
import BoldTextJson from "@components/Boldtextjson";

function Projets() {
  const [currentProject, setCurrentProject] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const projet = projetsData[currentProject];
  const images = projet.pictures || [];

  const keywordsMap = {
    "Booki": ["Booki", "HTML5", "CSS3", "Flexbox", "responsive", "GitHub", "Git"],
    "Portfolio - Sophie Bluel": [
      "JavaScript", "API", "REST", "modale", "upload", "suppression",
      "connexion", "authentification", "DOM", "Figma"
    ],
    "Site - Nina Carducci": ["freelance", "audit", "Lighthouse", "GTMetrix", "modale", "SEO", "accessibilité", "performances", "référencement local", "Schema.org", "Open Graph", "Twitter Cards", "HTML", "CSS"],
    "Kasa": ["React", "Vite", "Sass", "React Router", "Slideshow", "Collapse", "JSON", "404", "Figma", "composants", "responsive", "animations CSS"],
    "Mon vieux Grimoire": ["Node.js", "Express", "MongoDB", "Mongoose", "API REST", "JWT", "Bcrypt", "Sharp", "CRUD", "notation", "Green Code", "compression d’images", "authentification"]
  };

  const handlePrevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projetsData.length - 1 : prev - 1));
    setModalImageIndex(null);
  };

  const handleNextProject = () => {
    setCurrentProject((prev) => (prev === projetsData.length - 1 ? 0 : prev + 1));
    setModalImageIndex(null);
  };

  const openModal = (index) => {
    setModalImageIndex(index);
  };

  const closeModal = () => {
    setModalImageIndex(null);
  };

  const navigateModal = (newIndex) => {
    setModalImageIndex(newIndex);
  };

  return (
    <section className="projets" id="projets">
      <h2>Mes Projets</h2>

      <div className="projets__container">
        <div className="projets__info">
          <div className="projets__info__titles">
            <h3>{projet.title}</h3>
            <h4>{projet["under-title"]}</h4>
          </div>
          <div className="projets__info--arrows">
            <button onClick={handlePrevProject} className="arrow arrow-left"><FontAwesomeIcon icon={faArrowLeft} /></button>
            <button onClick={handleNextProject} className="arrow arrow-right"><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
          <div className="projets__info__description">
            <BoldTextJson
              text={projet.description}
              keywords={keywordsMap[projet["under-title"]] || []}
            />
            {projet.github && (
              <a href={projet.github} target="_blank" rel="noopener noreferrer">Lien GitHub</a>
            )}
          </div>
        </div>

        <div className="projets__gallery">
          {images.length > 0 ? (
            images.map((pic, index) => (
              <div
                key={index}
                className="projets__gallery-item"
                onClick={() => openModal(index)}
              >
                <img
                  src={new URL(`/src/assets/projects/${pic}`, import.meta.url).href}
                  alt={`Aperçu ${index + 1}`}
                />
              </div>
            ))
          ) : (
            <div className="projets__gallery-placeholder">Aucune image</div>
          )}
        </div>
      </div>

      <ImageModal
        images={images}
        currentIndex={modalImageIndex}
        onClose={closeModal}
        onNavigate={navigateModal}
      />
    </section>
  );
}

export default Projets;
