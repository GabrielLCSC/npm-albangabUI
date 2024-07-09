import { JSDOM } from "jsdom";
import { fireEvent } from "@testing-library/dom";
import Input from "../src/input"; // Assurez-vous que le chemin d'importation est correct

describe("Test du composant Input", () => {
  let dom;
  let inputElement;
  let onChange;

  // Configurer jsdom avant chaque test
  beforeEach(() => {
    // Créer un environnement DOM simulé
    dom = new JSDOM("<!doctype html><html><body></body></html>");

    // Simuler globalement le DOM
    global.document = dom.window.document;
    global.window = dom.window;

    // Créer une fonction mock pour simuler onChange
    onChange = jest.fn();

    // Créer un élément input avec le composant Input
    inputElement = Input({ type: "text", placeholder: "Enter text", onChange });

    // Ajouter l'input simulé au DOM simulé
    document.body.appendChild(inputElement);
  });

  // Nettoyer après chaque test
  afterEach(() => {
    // Supprimer l'input du DOM simulé
    document.body.removeChild(inputElement);

    // Réinitialiser les variables globales
    global.document = undefined;
    global.window = undefined;
  });

  test("Crée un champ de saisie avec le placeholder correct", () => {
    // Vérifier que le placeholder de l'input est correct
    expect(inputElement.placeholder).toBe("Enter text");
  });

  test("Simuler une saisie dans le champ de saisie", () => {
    // Simuler une saisie dans l'input
    fireEvent.input(inputElement, { target: { value: "Bonjour" } });

    // Vérifier que la fonction onChange a été appelée
    expect(onChange).toHaveBeenCalled();
  });

  // Vous pouvez ajouter d'autres tests ici pour vérifier d'autres aspects du composant Input
});
