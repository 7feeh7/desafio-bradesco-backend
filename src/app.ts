import express from "express";
import router from "./routes";
import MongoService from "./repositories/mongodb/MongoService";

const app = express();

MongoService.connectDB();

app.use(express.json());
app.use(router);

export { app };