import purchaseService from "./purchaseService.js";

const getPurchases = (req, res) => {
  console.log();
  const purchases = purchaseService.getAllPurchases();
  console.log(purchases);
  res.send(purchases);
};
const addPurchase = (req, res) => {
  const { userId, productId } = req.body;
  if (!userId || !productId)
    return res.status(400).json({ error: "Champs requis manquants" });
  res.status(201).json(purchaseService.createPurchase({ userId, productId }));
};

export { getPurchases, addPurchase };
