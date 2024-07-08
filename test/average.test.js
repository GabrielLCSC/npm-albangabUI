import average from "../src/average";

// Test pour vérifier la moyenne d'un tableau de nombres positifs
test("calculates average of positive numbers", () => {
  expect(average([1, 2, 3, 4, 5])).toBe(3);
});
