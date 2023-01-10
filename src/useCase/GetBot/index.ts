import { MongoBotRepository } from "../../repositories/implementations/MongoBotRepository";
import { GetBotController } from "./GetBotController";
import { GetBotUseCase } from "./GetBotUseCase";

const mongoBotRepository = new MongoBotRepository();

const getBotUseCase = new GetBotUseCase(
    mongoBotRepository
);

const getBotController = new GetBotController(
    getBotUseCase
);

export { getBotUseCase, getBotController };