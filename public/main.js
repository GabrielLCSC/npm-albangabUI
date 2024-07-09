// main.js

import Button from '../src/button';

// Créer une instance de Button
const button = Button({
  variant: '🥇',
  text: 'Click Me',
  onClick: () => alert('Button clicked!'),
});

// Ajouter le bouton à l'élément avec l'id 'app'
document.getElementById('app').appendChild(button);