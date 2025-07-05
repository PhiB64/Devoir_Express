import express from "express";
import * as controller from "./productController.js";

const router = express.Router();

router.get("/", controller.getProducts);
router.get("/:id", controller.getProduct);
router.post("/", controller.addProduct);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.removeProduct);

export default router;
