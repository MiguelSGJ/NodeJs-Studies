import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import Mongo from "./src/database/mongo.js";
import index from "./src/routes/index.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", index);

(async () => {
  await Mongo.connect({
    mongoConnectionString: process.env.MONGO_CS,
    mongoDbName: process.env.MONGO_DB_NAME,
  });
})();

export default app;
