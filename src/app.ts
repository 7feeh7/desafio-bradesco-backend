import express from "express";
import { config } from "dotenv";
import router from "./routes";
import mongoose from "mongoose";

config();

const app = express();

mongoose.set('strictQuery', true);

mongoose
    .connect('mongodb://localhost:27017/bradesco');

app.use(express.json());
app.use(router);

export { app };