import React from "react";

// Component: BoldTextJson
// Description: Affiche une chaîne de texte en mettant en gras les mots entourés de {accolades}
function BoldTextJson({ text = ""}) {
return (
  <p>

    {/* On découpe la chaîne en mots individuellement, séparés par des espaces */}
    {text.split(' ').map((word, index, array) => (
      <React.Fragment key={index}>

        {/* Si le mot contient une ouverture et une fermeture d'accolade */}
        {word.includes('{') && word.includes('}')

        // On extrait le contenu entre accolades et on le met en gras
        // Si le mot se termine par une accolade fermante : {mot}
        // Sinon : on rajoute le dernier caractère après le mot mis en gras (ex: {mot}.
          ? <strong>{word.charAt(word.length-1) === '}' ? word.match(/\{([^}]+)\}/)[1] : `${word.match(/\{([^}]+)\}/)[1]}${word[word.length-1]}`}</strong>
          : word}

        {/* On ajoute un espace entre les mots sauf après le dernier */}
        {index < array.length - 1 && ' '}
      </React.Fragment>
    ))}
  </p>
);

}
  export default BoldTextJson;