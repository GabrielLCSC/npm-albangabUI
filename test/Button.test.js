// __tests__/button.test.js

describe('Test du composant de bouton', () => {
  test('Clic sur le bouton', () => {
    const onClick = jest.fn();
    const button = createButton('🥇', 'Click Me', onClick);

    // Simuler un clic sur le bouton
    button.click();

    // Vérifier que la fonction onClick a été appelée
    expect(onClick).toHaveBeenCalled();
  });

  // Autres tests peuvent être ajoutés pour vérifier le rendu et le style du bouton
});