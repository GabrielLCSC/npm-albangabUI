/**
 * Crée un en-tête réutilisable avec un texte spécifié.
 * @param {string} text - Le texte à afficher dans l'en-tête.
 * @returns {HTMLElement} - Élément header créé.
 */
const Header = ({ text = "Default Header" }) => {
  const header = document.createElement("h1");
  header.textContent = text;
  header.className = "header"; // Classe CSS pour le style
  return header;
};

export default Header;
