const { calculateTotalPrice, applySpecialOffers } = require('./supermarket');

// Test de calcul du prix total sans offres spéciales
test('calculateTotalPrice without special offers', () => {
  const cart = {
    pomme: 4,
    orange: 3,
    pastèque: 5,
  };
  expect(calculateTotalPrice(cart)).toBe(6.4);
});

// Test d'application des offres spéciales
test('applySpecialOffers', () => {
  const cart = {
    pomme: 4,
    orange: 3,
    pastèque: 5,
  };
  const updatedCart = applySpecialOffers(cart);
  expect(updatedCart.pomme).toBe(6); // 4 achetées + 2 gratuites
  expect(updatedCart.pastèque).toBe(6); // 5 achetées + 1 gratuite
});

// Test de calcul du prix total avec offres spéciales appliquées
test('calculateTotalPrice with special offers', () => {
  const cart = {
    pomme: 4,
    orange: 3,
    pastèque: 5,
  };
  const updatedCart = applySpecialOffers(cart);
  expect(calculateTotalPrice(updatedCart)).toBe(7.4);
});