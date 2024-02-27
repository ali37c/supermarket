// Fonction pour calculer le prix total du panier
function calculateTotalPrice(cart) {
    let totalPrice = 0;
  
    // Parcourir chaque élément du panier
    for (const item of Object.keys(cart)) {
      const quantity = cart[item];
      const price = getProductPrice(item);
  
      // Calculer le prix total pour cet élément
      totalPrice += price * quantity;
    }
  
    return totalPrice;
  }
  
  // Fonction pour obtenir le prix d'un produit
  function getProductPrice(product) {
    const prices = {
      pomme: 0.2,
      orange: 0.5,
      pastèque: 0.8,
    };
    return prices[product.toLowerCase()] || 0;
  }
  
  // Fonction pour appliquer les offres spéciales
  function applySpecialOffers(cart) {
    // Offre sur les pommes : une achetée, une offerte
    const appleQuantity = cart.pomme || 0;
    const freeApples = Math.floor(appleQuantity / 2);
    cart.pomme -= freeApples;
  
    // Offre sur les pastèques : 3 pour le prix de 2
    const watermelonQuantity = cart.pastèque || 0;
    const extraWatermelons = Math.floor(watermelonQuantity / 3);
    cart.pastèque -= extraWatermelons;
  
    return cart;
  }
  
  module.exports = { calculateTotalPrice, applySpecialOffers };