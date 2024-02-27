const { calculateTotalPrice, applySpecialOffers } = require('./supermarket');

// Test de calcul du prix total sans offres spéciales
test('calculateTotalPrice without special offers', () => {
  const cart = {
    pomme: 4,
    orange: 3,
    pastèque: 5,
  };
  expect(calculateTotalPrice(cart)).toBe(6.3);
});

// Test d'application des offres spéciales
test('applySpecialOffers', () => {
  const cart = {
    pomme: 4, //0.2 per unit
    orange: 3,  //0.5 per unit
    pastèque: 5, //0.8 per unit
  };
  const updatedCart = applySpecialOffers(cart);
  expect(updatedCart.pomme).toBe(2); // 2 paid ( 2 free)
  expect(updatedCart.pastèque).toBe(4); // 4 paid ( 1 free)
});

// Test de calcul du prix total avec offres spéciales appliquées
test('calculateTotalPrice with special offers', () => {
  const cart = {
    pomme: 4,
    orange: 3,
    pastèque: 5,
  };
  const updatedCart = applySpecialOffers(cart);
  expect(calculateTotalPrice(updatedCart)).toBe(5.1);
});