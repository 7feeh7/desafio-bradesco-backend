import express from "express";
import { config } from "dotenv";
import router from "./routes";
import mongoose from "mongoose";

config();

const app = express();

mongoose.set('strictQuery', true);

mongoose
    .connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)

app.use(express.json());
app.use(router);

export { app };