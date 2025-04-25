import { useState, useEffect, useRef } from 'react';
import skills from '@datas/Skills/Skill.json';


// Component: Skills
// Description: Affiche une grille de compétences triées par niveau avec animation au scroll
function Skills() {
  const [visibleBars, setVisibleBars] = useState([]);
  const barRefs = useRef([]);

  // Ordre des niveaux pour le tri
  const levelOrder = {
    'débutant': 1,
    'base': 2,
    'intermédiaire': 3,
    'avancée': 4
  };

  // Largeur de la barre de progression selon le niveau
  const getProgressWidth = (level) => {
    switch (level.toLowerCase()) {
      case 'débutant':
        return '25%';
      case 'base':
        return '40%';
      case 'intermédiaire':
        return '60%';
      case 'avancée':
        return '80%';
      default:
        return '0%';
    }
  };

  // Tri des compétences du niveau le plus élevé au plus bas
  const sortedSkills = [...skills].sort((a, b) => {
    const levelA = levelOrder[a.level.toLowerCase()] || 0;
    const levelB = levelOrder[b.level.toLowerCase()] || 0;
    return levelB - levelA;
  });

  // Observer pour animer les barres visibles à l'écran
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleBars((prev) => [...prev, index]);
          } else {
            setVisibleBars((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 1 } // 50% de la barre visible
    );

    barRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (barRefs.current) {
        barRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);


  return (
    <section className="skills">
      <h2>Compétences</h2>

      {/* Grille de cartes de compétences */}
      <div className="skills__grid">
        {sortedSkills.map((skill, index) => (
          <div key={index} className="skills__card">
            <div className="skills__card-top">
            <img
              src={new URL(`/src/assets/skills/${skill.logo}`, import.meta.url).href}
              alt={skill.name}
              className="skills__card-logo"
            />
              <p className="skills__card-name">{skill.name}</p>
            </div>

            {/* Barre de progression animée */}
            <div
              className="skills__card-progress"
              ref={(el) => (barRefs.current[index] = el)}
              data-index={index}
            >
              <div
                className="skills__card-progress-bar"
                style={{
                  width: visibleBars.includes(index)
                    ? getProgressWidth(skill.level)
                    : '0%',
                }}
              ></div>
            </div>

            {/* Label du niveau */}
            <p className="skills__card-level">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
