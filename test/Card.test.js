import { JSDOM } from "jsdom";
import { fireEvent } from "@testing-library/dom"; // Assurez-vous d'importer fireEvent si nécessaire
import "@testing-library/jest-dom"; // Notez l'absence de /extend-expect ici

// Importez votre composant Card ici
import Card from "../src/Card";

describe("Test du composant Card", () => {
  let dom;
  let cardElement;

  beforeEach(() => {
    // Configurer JSDOM
    dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
    global.document = dom.window.document;
    global.window = dom.window;

    // Créer un élément Card pour chaque test
    cardElement = Card({
      imageUrl: "https://example.com/image.jpg",
      title: "Card Title",
      description: "Description of the card",
    });

    // Ajouter l'élément Card au DOM simulé
    document.body.appendChild(cardElement);
  });

  afterEach(() => {
    // Nettoyer après chaque test
    document.body.removeChild(cardElement);
    global.document = undefined;
    global.window = undefined;
  });

  test("Ajoute une image à la carte si une URL est fournie", () => {
    // Vérifier la présence et l'attribut src de l'image
    const imageElement = cardElement.querySelector("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe("https://example.com/image.jpg");
  });

  // Ajoutez d'autres tests pour votre composant Card ici
});
