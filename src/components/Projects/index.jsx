import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import projetsData from '@datas/Projects/Projets.json';

import ImageModal from "@components/Modale";
import BoldTextJson from "@components/Boldtextjson";


// Component: Projets
// Description: Section affichant les projets avec galerie, navigation et modale d’images
function Projets() {
  const [currentProject, setCurrentProject] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const projet = projetsData[currentProject];
  const images = projet.pictures || [];

  // Navigation entre les projets
  const handlePrevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projetsData.length - 1 : prev - 1));
    setModalImageIndex(null);
  };

  const handleNextProject = () => {
    setCurrentProject((prev) => (prev === projetsData.length - 1 ? 0 : prev + 1));
    setModalImageIndex(null);
  };

  // Gestion de la modale d’image
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

        {/* Partie gauche : titre, navigation, description */}
        <div className="projets__info">
          <div className="projets__info__titles">
            <h3>{projet.title}</h3>
            <h4>{projet["under-title"]}</h4>
          </div>
          <div className="projets__info--arrows">
            <button onClick={handlePrevProject} className="arrow arrow-left" aria-label="Previous slide">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button onClick={handleNextProject} className="arrow arrow-right" aria-label="Next slide">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="projets__info__description">
            <BoldTextJson
              text={projet.description}
            />
            {projet.github && (
              <a href={projet.github} target="_blank" rel="noopener noreferrer">
                Lien GitHub
              </a>
            )}
          </div>
        </div>

        {/* Partie droite : galerie d’images */}
        <div className="projets__right">
          <div className="projets__hint">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Cliquez sur les images du projet pour les agrandir</span>
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
      </div>

      {/* Modale d’image */}
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