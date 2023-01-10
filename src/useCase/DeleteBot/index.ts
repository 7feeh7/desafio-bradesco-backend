import { MongoBotRepository } from "../../repositories/mongodb/MongoBotRepository";
import { DeleteBotController } from "./DeleteBotController";
import { DeleteBotUseCase } from "./DeleteBotUseCase";

const mongoBotRepository = new MongoBotRepository();

const deleteBotUseCase = new DeleteBotUseCase(
    mongoBotRepository
);

const deleteBotController = new DeleteBotController(
    deleteBotUseCase
);

export { deleteBotUseCase, deleteBotController };