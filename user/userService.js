let users = [
  {
    id: 1,
    name: "Philippe BARBOSA",
    age: 54,
    email: "philippe@gmail.com",
  },
  {
    id: 2,
    name: "Lucas BALLU",
    age: 20,
    email: "lucas@outlook.com",
  },
];

const getAll = () => users;

const getById = (id) => users.find((u) => u.id === id);

const create = (data) => {
  users.push(data);
  return data;
};

const update = (id, newUser) => {
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    users[index] = { id, ...newUser };
    return users[index];
  }
  return null;
};

const partialUpdate = (id, data) => {
  const user = users.find((u) => u.id === id);
  if (!user) return null;

  Object.assign(user, data);
  return user;
};

const remove = (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return null;
};

const getYoungest = () => {
  const minAge = Math.min(...users.map((u) => u.age));
  return users.filter((u) => u.age === minAge);
};

const searchByName = (name) => {
  return users.filter((u) => u.name.toLowerCase().includes(name.toLowerCase()));
};

const getAverageAge = () => {
  const total = users.reduce((sum, u) => sum + u.age, 0);
  return users.length ? total / users.length : 0;
};

const sortBy = (field) => {
  return [...users].sort((a, b) =>
    field === "name" ? a.name.localeCompare(b.name) : a.age - b.age
  );
};

const getByDomain = (domain) => {
  return users.filter((u) => u.email?.toLowerCase().endsWith(`@${domain}`));
};

export default {
  getAll,
  getById,
  create,
  update,
  partialUpdate,
  remove,
  getYoungest,
  searchByName,
  getAverageAge,
  sortBy,
  getByDomain,
};
