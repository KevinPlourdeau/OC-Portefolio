const Intro = () => {
  return (
    <section className="intro" id="intro">
      <div className="intro__background"></div>
      <div className="intro__overlay">
        <div className="intro__overlay__text">
          <div className="intro__overlay__text-left">
            <div className="intro__overlay__text-left--title">
              <h1>Kevin Plourdeau</h1>
              <h2>Développeur Web</h2>
            </div>
            <div className="intro__overlay__text-left--text">
              <p>Je suis un développeur web de 25 ans, basé à Tours, passionné par le développement front-end et back-end, avec une affection particulière pour React et les technologies qui l'accompagnent.</p>
            </div>
          </div>
          <div className="intro__overlay__text-right">
            <p>Curieux et avide d'apprentissage, je m'intéresse également aux librairies comme Wavify ou Three.js, qui offrent de nouvelles possibilités dans l'animation et le rendu 3D sur le web.</p>
            <p>Diplômé d'OpenClassrooms en intégration web (bac +2/+3), après avoir suivi une formation rythmée par de nombreux projets évalués par des professionnels, je poursuis aujourd'hui mon parcours en visant une deuxième formation en <strong>alternance</strong>.</p>
            <p>Je suis donc à la <strong>recherche d'une entreprise prête à m'accompagner</strong> pour continuer à développer mes compétences tout en contribuant concrètement à des projets ambitieux.</p>
          </div>
        </div>
        <nav className="intro__overlay__nav">
          <a href="#competences">COMPÉTENCES</a>
          <a href="#projets">PROJETS</a>
          <a href="#contact">CONTACT</a>
          <a href="/CV_Plourdeau_Kevin.pdf" download="CV_Plourdeau_Kevin.pdf" target="_blank" rel="noopener noreferrer">MON CV</a>
        </nav>
      </div>
    </section>
  );
};

export default Intro;