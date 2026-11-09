interface Offer {
  name: string;
  type: 'flat' | 'percent';
  value: number;
  minPrice: number;
}

function selectBestDiscount(price: number, offers: Offer[]): Offer | null {
  let bestOffer: Offer | null = null;
  let lowestPrice = price;

  for (const offer of offers) {
    if (price < offer.minPrice) {
      continue;
    }

    let finalPrice: number;
    if (offer.type === 'flat') {
      finalPrice = Math.max(0, price - offer.value);
    } else {
      finalPrice = Math.max(0, price - price * (offer.value / 100));
    }

    if (finalPrice < lowestPrice) {
      lowestPrice = finalPrice;
      bestOffer = offer;
    }
  }

  return bestOffer;
}
