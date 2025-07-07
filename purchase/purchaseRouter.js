import express from "express";
import * as controller from "./purchaseController.js";

const router = express.Router();

router.get("/", controller.getPurchases);
router.post("/", controller.addPurchase);

export default router;
