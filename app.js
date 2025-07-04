import express from "express";
import usersRoutes from "./routes/users.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use("/", usersRoutes);

app.use((req, res) => {
  res.status(404).send("Route non trouvée");
});

app.listen(port, () => {
  console.log(`Serveur lancé sur: http://localhost:${port}`);
});
