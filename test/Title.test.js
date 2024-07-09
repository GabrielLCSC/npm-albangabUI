// __tests__/Title.test.js

import { JSDOM } from 'jsdom';
import Title from '../src/Title'; // Assurez-vous que le chemin d'importation est correct

describe('Test du composant Title', () => {
  let dom;

  // Configurer JSDOM avant chaque test
  beforeEach(() => {
    // Créer un environnement DOM simulé
    dom = new JSDOM('<!doctype html><html><body></body></html>');

    // Simuler globalement le DOM
    global.document = dom.window.document;
    global.window = dom.window;
  });

  // Nettoyer après chaque test
  afterEach(() => {
    // Réinitialiser les variables globales
    global.document = undefined;
    global.window = undefined;
  });

  test('Crée un titre avec le texte correct', () => {
    const text = 'Titre de test';
    const variant = '🎉'; // Emoji utilisé comme classe CSS

    // Créer un élément titre avec le composant Title
    const titleElement = Title({ text, variant });

    // Vérifier que le texte du titre est correct
    expect(titleElement.textContent).toBe(text);

    // Vérifier que la classe du titre est correcte (utilisation de l'emoji)
    expect(titleElement.className).toBe(variant);
  });

  // Ajoutez d'autres tests ici pour vérifier d'autres aspects du composant Title si nécessaire
});
