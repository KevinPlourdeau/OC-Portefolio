function BoldTextJson({ text = "", keywords = [] }) {
    // Si aucun mot-clé ou si pas de texte → on retourne le texte brut
    if (!text || keywords.length === 0) {
      return <p>{text}</p>;
    }
  
    // Expression régulière insensible à la casse
    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    const parts = text.split(regex);
  
    return (
      <p>
        {parts.map((part, index) =>
          keywords.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
            <strong key={index}>{part}</strong>
          ) : (
            part
          )
        )}
      </p>
    );
  }
  
  export default BoldTextJson;