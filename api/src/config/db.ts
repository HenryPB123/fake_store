import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
console.log("the uri es: ---->" + MONGO_URL);

const connetDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URL!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("Conexión a la base de datos MongoDB exitosa");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
    process.exit(1);
  }
};

export default connetDB;
