/**
 * Crée une carte réutilisable avec un titre, un contenu et une image optionnels.
 * @param {string} title - Le titre de la carte.
 * @param {string} content - Le contenu de la carte.
 * @param {string} imageUrl - L'URL de l'image optionnelle pour la carte.
 * @returns {HTMLElement} - Élément div de la carte créée.
 */
const Card = ({ title, content, imageUrl }) => {
    const card = document.createElement('div');
    card.classList.add('🃏', 'card');
  
    if (imageUrl) {
      const image = document.createElement('img');
      image.src = imageUrl;
      image.alt = title;
      card.appendChild(image);
    }
  
    if (title) {
      const cardTitle = document.createElement('h2');
      cardTitle.textContent = title;
      card.appendChild(cardTitle);
    }
  
    if (content) {
      const cardContent = document.createElement('p');
      cardContent.textContent = content;
      card.appendChild(cardContent);
    }
  
    return card;
  };
  
  export default Card;
  