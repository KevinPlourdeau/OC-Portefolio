import React from "react";


// Component: ImageModal
// Description: Modale d'affichage d'image avec navigation (carousel)
function ImageModal({ images, currentIndex, onClose, onNavigate }) {
  if (currentIndex === null || images.length === 0) return null;

  const image = images[currentIndex];

  // Navigation vers l'image précédente
  const handlePrev = (e) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  // Navigation vers l'image suivante
  const handleNext = (e) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <div className="image-modal" onClick={onClose}>

      {/* Flèche gauche */}
      <div class="image-modal__arrow-wrapper">
        <button className="image-modal__arrow--left" onClick={handlePrev}>❮</button>
      </div>

      {/* Contenu principal de l'image */}
      <div className="image-modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="image-modal__img-wrapper">
              <img
              src={new URL(`/src/assets/projects/${images[currentIndex]}`, import.meta.url).href}
              alt={`Aperçu ${currentIndex + 1}`}
              />
          </div>
          <p className="image-modal__counter">
          {currentIndex + 1} / {images.length}
          </p>
      </div>

      {/* Flèche droite */}
      <div class="image-modal__arrow-wrapper">
        <button className="image-modal__arrow--right" onClick={handleNext}>❯</button>
      </div>
    </div>
  );
}

export default ImageModal;
