interface Inventory {
  [productId: string]: number;
}

interface Transaction {
  productId: string;
  type: 'in' | 'out';
  quantity: number;
}

function reconcileInventory(initialInventory: Inventory, transactions: Transaction[]): Inventory {
  const inventory: Inventory = { ...initialInventory };

  for (const { productId, type, quantity } of transactions) {
    const currentStock = inventory[productId] ?? 0;

    if (type === 'in') {
      inventory[productId] = currentStock + quantity;
    } else if (type === 'out') {
      inventory[productId] = Math.max(0, currentStock - quantity);
    }
  }

  return inventory;
}
