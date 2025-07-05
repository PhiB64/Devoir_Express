import * as productService from "./productService.js";

const getProducts = (req, res) => res.json(productService.getAllProducts());

const getProduct = (req, res) => {
  const product = productService.getProductById(Number(req.params.id));
  product
    ? res.json(product)
    : res.status(404).json({ error: "Produit introuvable" });
};

const addProduct = (req, res) => {
  const { id, name, price } = req.body;
  if (!id || !name || !price)
    return res.status(400).json({ error: "Champs requis manquants" });
  res.status(201).json(productService.createProduct({ id, name, price }));
};

const updateProduct = (req, res) => {
  const updated = productService.updateProduct(Number(req.params.id), req.body);
  updated
    ? res.json(updated)
    : res.status(404).json({ error: "Produit non trouvé" });
};

const removeProduct = (req, res) => {
  const deleted = productService.deleteProduct(Number(req.params.id));
  deleted
    ? res.json(deleted)
    : res.status(404).json({ error: "Produit non trouvé" });
};

export { getProducts, getProduct, addProduct, updateProduct, removeProduct };
