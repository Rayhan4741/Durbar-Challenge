interface CartItem {
  price: number;
  quantity: number;
  discount: number;
}

function calculateCartTotal(items: CartItem[], taxRate: number): number {
  // Your code here

  const subtotal = items.reduce((acc, item) => {
    const itemTotal = item.price * item.quantity * (1 - item.discount/100);
    return acc + itemTotal;
  }, 0);

  const totalWithTax = subtotal * (1+taxRate / 100);

  return Math.round((totalWithTax + Number.EPSILON) * 100)/ 100;
}
