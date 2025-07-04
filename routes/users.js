import express from "express";

import {
  getUsers,
  getUserById,
  postUser,
  deleteUserById,
  patchUser,
  putUser,
} from "../controllers/usersController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", postUser);
router.delete("/:id", deleteUserById);
router.patch("/:id", patchUser);
router.put("/:id", putUser);

export default router;
