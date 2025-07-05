let users = [
  {
    id: 1,
    name: "Philippe BARBOSA",
    age: 54,
    role: "Développeur",
  },
  {
    id: 2,
    name: "Lucas BALLU",
    age: 20,
    role: "Intégrateur",
  },
];

const getUsers = (req, res) =>
  users?.length
    ? res.json(users)
    : res.status(404).json({ error: "Aucun utilisateur trouvé" });

const getUserById = function (req, res) {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "Utilisateur non trouvé" });
  }
};

const postUser = function (req, res) {
  users.push(req.body);
  res.json(users);
};

const deleteUserById = function (req, res) {
  const id = Number(req.params.id);
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    res.json(deletedUser);
  } else res.status(404).json({ error: "Utilisateur non trouvé" });
};

const putUser = function (req, res) {
  const id = Number(req.params.id);
  const { name, age, role } = req.body;

  if (!name || !age || !role) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    users[index] = { id, name, age, role };
    res.json(users[index]);
  } else {
    res.status(404).json({ error: "Utilisateur non trouvé" });
  }
};

const patchUser = function (req, res) {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "Utilisateur non trouvé" });
  }

  const { name, age, role } = req.body;

  if (name !== undefined) user.name = name;
  if (age !== undefined) user.age = age;
  if (role !== undefined) user.role = role;

  res.json(user);
};
const getYoungestUser = function (req, res) {
  if (!users || users.length === 0) {
    return res.status(404).json({ error: "Aucun utilisateur disponible" });
  }

  const minAge = Math.min(...users.map((u) => u.age));

  const youngest = users.filter((u) => u.age === minAge);

  res.json(youngest);
};

const searchUserByName = (req, res) => {
  const search = req.query.name?.toLowerCase();

  if (!search) {
    return res.status(400).json({ error: "Paramètre 'name' requis" });
  }

  const results = users.filter((u) => u.name.toLowerCase().includes(search));

  res.json(results);
};

const getAverageAge = (req, res) => {
  if (!users.length) {
    return res.status(400).json({ error: "Aucun utilisateur trouvé" });
  }

  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  const average = totalAge / users.length;

  res.json(average);
};

export {
  getUsers,
  getUserById,
  postUser,
  deleteUserById,
  patchUser,
  putUser,
  getYoungestUser,
  searchUserByName,
  getAverageAge,
};
