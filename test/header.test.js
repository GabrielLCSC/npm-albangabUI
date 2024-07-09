import { JSDOM } from "jsdom";
import Header from "../src/header";

describe("Test du composant Header", () => {
  let dom;
  let headerElement;

  beforeEach(() => {
    // Créer un environnement DOM simulé
    dom = new JSDOM("<!doctype html><html><body></body></html>");

    // Simuler globalement le DOM
    global.document = dom.window.document;
    global.window = dom.window;

    // Créer un élément header avec le composant Header
    headerElement = Header({ text: "Welcome to My Site" });

    // Ajouter le header simulé au DOM simulé
    document.body.appendChild(headerElement);
  });

  // Nettoyer après chaque test
  afterEach(() => {
    // Supprimer le header du DOM simulé
    document.body.removeChild(headerElement);

    // Réinitialiser les variables globales
    global.document = undefined;
    global.window = undefined;
  });

  test("Vérifier la présence de la classe CSS", () => {
    // Vérifier que l'élément header a la classe CSS 'header'
    expect(headerElement.className).toBe("header");
  });
});
