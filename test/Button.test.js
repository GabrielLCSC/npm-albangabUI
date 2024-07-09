// __tests__/button.test.js

import { JSDOM } from "jsdom";
import Button from "../src/Button"; // Assurez-vous que le chemin d'importation est correct

describe("Test du composant Button", () => {
  let dom;
  let buttonElement;
  let onClick;

  // Configurer jsdom avant chaque test
  beforeEach(() => {
    // Créer un environnement DOM simulé
    dom = new JSDOM("<!doctype html><html><body></body></html>");

    // Simuler globalement le DOM
    global.document = dom.window.document;
    global.window = dom.window;

    // Créer une fonction mock pour simuler le clic
    onClick = jest.fn();

    // Créer un élément bouton avec le composant Button
    buttonElement = Button({ variant: "🥇", text: "Click Me" });

    // Ajouter le bouton simulé au DOM simulé
    document.body.appendChild(buttonElement);
  });

  // Nettoyer après chaque test
  afterEach(() => {
    // Supprimer le bouton du DOM simulé
    document.body.removeChild(buttonElement);

    // Réinitialiser les variables globales
    global.document = undefined;
    global.window = undefined;
  });

  test("Crée un bouton avec le texte correct", () => {
    // Vérifier que le texte du bouton est correct
    expect(buttonElement.textContent).toBe("Click Me");

    // Simuler un clic sur le bouton
    buttonElement.click();
  });

  // Vous pouvez ajouter d'autres tests ici pour vérifier d'autres aspects du composant Button
});
