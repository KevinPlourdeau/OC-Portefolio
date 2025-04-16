import React from "react";

function ImageModal({ images, currentIndex, onClose, onNavigate }) {
  if (currentIndex === null || images.length === 0) return null;

  const image = images[currentIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <div className="image-modal" onClick={onClose}>
        <button className="image-modal__arrow--left" onClick={handlePrev}>❮</button>
        
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
        <button className="image-modal__arrow--right" onClick={handleNext}>❯</button>
    </div>
  );
}

export default ImageModal;
