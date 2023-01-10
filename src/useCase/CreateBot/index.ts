import { MongoBotRepository } from "../../repositories/mongodb/MongoBotRepository";
import { CreateBotController } from "./CreateBotController";
import { CreateBotUseCase } from "./CreateBotUseCase";

const mongoBotRepository = new MongoBotRepository();

const createBotUseCase = new CreateBotUseCase(
    mongoBotRepository
);

const createBotController = new CreateBotController(
    createBotUseCase
);

export { createBotUseCase, createBotController };