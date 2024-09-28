import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connetDB from "./config/db";
import router from "./routes";

dotenv.config();

const PORT = process.env.PORT;
connetDB();

const server = express();
server.use(express.json());
server.use(cors());

server.use("/api/v1/", router);

server.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
