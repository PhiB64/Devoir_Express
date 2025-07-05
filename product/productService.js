let products = [
  { id: 1, name: "Clavier", price: 29.99 },
  { id: 2, name: "Écran", price: 199.0 },
];

const getAllProducts = () => products;

const getProductById = (id) => products.find((p) => p.id === id);

const createProduct = (product) => {
  products.push(product);
  return product;
};

const updateProduct = (id, updated) => {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  products[index] = { id, ...updated };
  return products[index];
};

const deleteProduct = (id) => {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  return products.splice(index, 1)[0];
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
