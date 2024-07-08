import React from 'react';
import './styles.css';

/**
 * Composant bouton réutilisable.
 * @param {string} variant - La variante du bouton (ex. '🥇', '🥈').
 * @param {string} children - Le texte ou contenu du bouton.
 * @param {function} onClick - La fonction à appeler lors du clic sur le bouton.
 */
const Button = ({ variant, children, onClick }) => {
  return (
      <button className={`▶️ ${variant}`} onClick={onClick}>
        {children}
      </button>
    );
};

export default Button;