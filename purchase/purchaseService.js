import userService from "../user/userService.js";

let purchases = [{ userId: 2, productId: 5 }];

const getAllPurchases = () => {
  console.log(purchases);
  return purchases;
};
const createPurchase = (purchase) => {
  const isExist = userService.getById(purchase.userId);
  purchases.push(purchase);
  console.log(isExist);
  return purchase;
};

const getProductByUser = (userId) =>
  products.find((product) => product.userId === userId);

export default { getAllPurchases, createPurchase, getProductByUser };
