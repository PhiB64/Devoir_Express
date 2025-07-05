import * as purchaseService from "./purchaseService.js";

const createPurchase = (req, res) => {
  const { userId, productId } = req.body;
  if (!userId || !productId) {
    return res.status(400).json({ error: "userId et productId requis" });
  }
  const purchase = purchaseService.purchaseProduct(userId, productId);
  res.status(201).json(purchase);
};

const getPurchases = (req, res) => {
  res.json(purchaseService.getAllPurchases());
};

const getUserPurchases = (req, res) => {
  const userId = Number(req.params.userId);
  res.json(purchaseService.getPurchasesByUser(userId));
};

export { createPurchase, getPurchases, getUserPurchases };
