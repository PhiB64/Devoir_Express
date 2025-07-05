import express from "express";

import {
  getUsers,
  getUserById,
  postUser,
  deleteUserById,
  patchUser,
  putUser,
  getYoungestUser,
  searchUserByName,
  getAverageAge,
  sortUsers,
  getUsersByDomain,
} from "../controllers/usersController.js";

const router = express.Router();

router.get("/:domain", getUsersByDomain);
router.post("/sort", sortUsers);
router.get("/average", getAverageAge);
router.get("/search", searchUserByName);
router.get("/youngest", getYoungestUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", postUser);
router.delete("/:id", deleteUserById);
router.patch("/:id", patchUser);
router.put("/:id", putUser);

export default router;
