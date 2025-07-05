import * as userService from "./userService.js";

const getUsers = (req, res) => {
  const users = userService.getAll();
  users.length
    ? res.json(users)
    : res.status(404).json({ error: "Aucun utilisateur trouvé" });
};

const getUserById = (req, res) => {
  const user = userService.getById(Number(req.params.id));
  user
    ? res.json(user)
    : res.status(404).json({ error: "Utilisateur non trouvé" });
};

const createUser = (req, res) => {
  const user = userService.create(req.body);
  res.status(201).json(user);
};

const updateUser = (req, res) => {
  const { name, age, role } = req.body;
  if (!name || !age || !role) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  const updated = userService.update(Number(req.params.id), req.body);
  updated
    ? res.json(updated)
    : res.status(404).json({ error: "Utilisateur non trouvé" });
};

const patchUser = (req, res) => {
  const updated = userService.partialUpdate(Number(req.params.id), req.body);
  updated
    ? res.json(updated)
    : res.status(404).json({ error: "Utilisateur non trouvé" });
};

const deleteUser = (req, res) => {
  const deleted = userService.remove(Number(req.params.id));
  deleted
    ? res.json(deleted)
    : res.status(404).json({ error: "Utilisateur non trouvé" });
};

const getYoungestUser = (req, res) => {
  const youngest = userService.getYoungest();
  res.json(youngest);
};

const searchByName = (req, res) => {
  const name = req.query.name;
  if (!name) return res.status(400).json({ error: "Paramètre 'name' requis" });
  res.json(userService.searchByName(name));
};

const getAverageAge = (req, res) => {
  res.json(userService.getAverageAge());
};

const sortUsers = (req, res) => {
  const { sortBy } = req.body;
  if (!["name", "age"].includes(sortBy)) {
    return res.status(400).json({ error: "Paramètre 'sortBy' invalide" });
  }
  res.json(userService.sortBy(sortBy));
};

const getByDomain = (req, res) => {
  res.json(userService.getByDomain(req.params.domain));
};

export {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser,
  getYoungestUser,
  searchByName,
  getAverageAge,
  sortUsers,
  getByDomain,
};
