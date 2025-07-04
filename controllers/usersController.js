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

const getUserById = function (req, res) {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "Utilisateur non trouvé" });
  }
};

export { getUserById };
