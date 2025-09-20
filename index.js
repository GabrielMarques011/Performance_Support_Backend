import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import createUserRoute from "./routes/createUser.js";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.json());
app.use("/api/create-user", createUserRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
