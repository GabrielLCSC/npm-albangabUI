// Button.js

import "./style.css";

/**
 * Crée un bouton réutilisable avec une variante spécifiée.
 * @param {string} variant - La classe de variante du bouton (par exemple '🥇', '🥈').
 * @param {string} text - Le texte à afficher sur le bouton.
 * @returns {HTMLElement} - Élément bouton créé.
 */
const Button = ({ variant, text, onClick }) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = `▶️ ${variant}`;
  return button;
};

export default Button;
