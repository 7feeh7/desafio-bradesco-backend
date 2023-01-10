import { MongoBotRepository } from "../../repositories/mongodb/MongoBotRepository";
import { UpdateBotController } from "./UpdateBotController";
import { UpdateBotUseCase } from "./UpdateBotUseCase";

const mongoBotRepository = new MongoBotRepository();

const updateBotUseCase = new UpdateBotUseCase(
    mongoBotRepository
);

const updateBotController = new UpdateBotController(
    updateBotUseCase
);

export { updateBotUseCase, updateBotController };