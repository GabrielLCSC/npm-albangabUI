// src/Title.js

/**
 * Crée un composant de titre réutilisable avec une variante spécifiée.
 * @param {string} text - Le texte du titre.
 * @param {string} variant - La variante du titre (emoji).
 * @returns {HTMLElement} - Élément titre créé.
 */
const Title = ({ text, variant }) => {
    const title = document.createElement('h1');
    title.textContent = text;
    title.className = variant; // Utilisation d'un emoji comme classe CSS
    return title;
  };
  
  export default Title;
  