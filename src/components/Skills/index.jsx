import { useState, useEffect, useRef } from 'react';
import skills from '@datas/Skills/Skill.json';

function Skills() {
  const [visibleBars, setVisibleBars] = useState([]);

  const levelOrder = {
    'débutant': 1,
    'base': 2,
    'intermédiaire': 3,
    'avancée': 4
  };

  const barRefs = useRef([]);

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

  const sortedSkills = [...skills].sort((a, b) => {
    const levelA = levelOrder[a.level.toLowerCase()] || 0;
    const levelB = levelOrder[b.level.toLowerCase()] || 0;
    return levelA - levelB;
  });

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
      <div className="skills__grid">
        {sortedSkills.map((skill, index) => (
          <div key={index} className="skills__card">
            <div className="skills__card-top">
              <img
                src={`/src/assets/skills/${skill.logo}`}
                alt={skill.name}
                className="skills__card-logo"
              />
              <p className="skills__card-name">{skill.name}</p>
            </div>
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
            <p className="skills__card-level">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
