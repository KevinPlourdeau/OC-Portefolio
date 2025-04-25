import React from "react";

// Component: Handledownload
// Description: Lien cliquable permettant de télécharger un fichier local
const DownloadButton = ({ filePath, fileName, children, className }) => {
  
  // Crée un lien de téléchargement simulé
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = filePath;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a href="#" onClick={handleDownload} className={className}>
      {children}
    </a>
  );
};

export default DownloadButton;
