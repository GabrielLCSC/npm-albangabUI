/**
 * Crée un champ de saisie réutilisable avec une variante spécifiée.
 * @param {string} type - Le type du champ de saisie (par exemple 'text', 'password').
 * @param {string} placeholder - Le texte indicatif à afficher dans le champ.
 * @param {function} onChange - La fonction à appeler lors de la modification du champ.
 * @returns {HTMLElement} - Élément input créé.
 */
const Input = ({ type = 'text', placeholder = '', onChange }) => {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.className = '🎹'; // Emoji de clavier
    input.addEventListener('input', onChange);
    return input;
  };
  
  export default Input;
  