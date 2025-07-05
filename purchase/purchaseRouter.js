import express from "express";
import * as controller from "./purchaseController.js";

const router = express.Router();

router.post("/", controller.createPurchase);
router.get("/", controller.getPurchases);
router.get("/:userId", controller.getUserPurchases);

export default router;
