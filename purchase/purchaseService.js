let purchases = [];

const purchaseProduct = (userId, productId) => {
  const purchase = {
    userId,
    productId,
    date: new Date().toISOString(),
  };
  purchases.push(purchase);
  return purchase;
};

const getAllPurchases = () => purchases;

const getPurchasesByUser = (userId) =>
  purchases.filter((p) => p.userId === userId);

export { purchaseProduct, getAllPurchases, getPurchasesByUser };
