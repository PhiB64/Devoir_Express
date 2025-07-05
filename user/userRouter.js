import express from "express";
import * as controller from "./userController.js";

const router = express.Router();

router.get("/", controller.getUsers);
router.get("/youngest", controller.getYoungestUser);
router.get("/average-age", controller.getAverageAge);
router.get("/search", controller.searchByName);
router.get("/domain/:domain", controller.getByDomain);
router.get("/:id", controller.getUserById);

router.post("/", controller.createUser);
router.post("/sort", controller.sortUsers);

router.put("/:id", controller.updateUser);
router.patch("/:id", controller.patchUser);
router.delete("/:id", controller.deleteUser);

export default router;
