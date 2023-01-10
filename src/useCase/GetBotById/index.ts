import { MongoBotRepository } from "../../repositories/mongodb/MongoBotRepository";
import { GetBotByIdController } from "./GetBotByIdController";
import { GetBotByIdUseCase } from "./GetBotByIdUseCase";

const mongoBotRepository = new MongoBotRepository();

const getBotByIdUseCase = new GetBotByIdUseCase(
    mongoBotRepository
);

const getBotByIdController = new GetBotByIdController(
    getBotByIdUseCase
);

export { getBotByIdUseCase, getBotByIdController };