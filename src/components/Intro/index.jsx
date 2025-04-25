import DownloadButton from "@components/handleDownload";


// Component: Intro
// Description: Section d’introduction avec présentation, liens de navigation et CV téléchargeable
const Intro = () => {
  return (
    <section className="intro" id="intro">

      {/* Image de fond */}
      <div className="intro__background"></div>

      {/* Contenu principal (overlay) */}
      <div className="intro__overlay">
        <div className="intro__overlay__text">
          <div className="intro__overlay__text-left">

            {/* Bloc gauche : titre et présentation */}
            <div className="intro__overlay__text-left--title">
              <h1>Kevin Plourdeau</h1>
              <h2>Développeur Web</h2>
            </div>
            <div className="intro__overlay__text-left--text">
              <p>Je suis un <strong>développeur web</strong> de <strong>25 ans</strong>, basé à <strong>Tours</strong>, passionné par le <strong>développement front-end et back-end</strong>, avec une affection particulière pour <strong>React</strong> et les <strong>technologies qui l'accompagnent</strong>.</p>
            </div>
          </div>

          {/* Bloc droit : parcours et objectifs */}
          <div className="intro__overlay__text-right">
            <p>Curieux et avide d'apprentissage, je m'intéresse notamment à des technologies comme <strong>Three.js</strong>, qui permettent de créer des sites web plus <strong>interactifs</strong>, <strong>animés</strong> et <strong>esthétiques</strong> en exploitant pleinement le potentiel du rendu 3D.</p>
            <p><strong>Diplômé d'OpenClassrooms</strong> en intégration web (bac +2/+3), après une formation avec des projets concrets évalués par des professionnels, je poursuis aujourd'hui mon parcours avec pour objectif une <strong>deuxième formation en alternance</strong> — ou, à défaut, une <strong>entrée directe dans le monde professionnel</strong>.</p>
            <p>Je suis donc à la <strong>recherche d'une entreprise prête à m'accompagner</strong> pour continuer à développer mes compétences tout en contribuant concrètement à des <strong>projets ambitieux</strong>.</p>
          </div>
        </div>

        {/* Navigation + bouton de téléchargement */}
        <nav className="intro__overlay__nav">
          <a href="#competences">COMPÉTENCES</a>
          <a href="#projets">PROJETS</a>
          <a href="#contact">CONTACT</a>
          <DownloadButton
            filePath={`${import.meta.env.BASE_URL}CV_Plourdeau_Kevin.pdf`}
            fileName="CV_Plourdeau_Kevin.pdf"
          >
            MON CV
          </DownloadButton>
        </nav>
      </div>
    </section>
  );
};

export default Intro;