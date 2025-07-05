import express from "express";
import usersRoutes from "./user/userRouter.js";
import productRouter from "./product/productRouter.js";
import purchaseRouter from "./purchase/purchaseRouter.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use("/products", productRouter);
app.use("/purchases", purchaseRouter);
app.use("/users", usersRoutes);

app.use((req, res) => {
  res.status(404).send("Route non trouvée");
});

app.listen(port, () => {
  console.log(`Serveur lancé sur: http://localhost:${port}`);
});
