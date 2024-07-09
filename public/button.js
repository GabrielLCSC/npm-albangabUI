/**
 * Crée un bouton réutilisable avec une variante spécifiée.
 * @param {string} variant - La classe de variante du bouton (par exemple '🥇', '🥈').
 * @param {string} text - Le texte à afficher sur le bouton.
 * @param {function} onClick - La fonction à appeler lors du clic sur le bouton.
 * @returns {HTMLElement} - Élément bouton créé.
 */
const Button = ({ variant, text }) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = `alban-button ${variant}`;
  button.className = `gabriel-button ${variant}`;
  return button;
};

export default Button;
