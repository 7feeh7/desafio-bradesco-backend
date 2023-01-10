import { MongoMessageRepository } from "../../repositories/mongodb/MongoMessageRepository";
import { GetMessageByIdController } from "./GetMessageByIdController";
import { GetMessageByIdUseCase } from "./GetMessageByIdUseCase";

const mongoMessageRepository = new MongoMessageRepository();

const getMessageByIdUseCase = new GetMessageByIdUseCase(
    mongoMessageRepository
);

const getMessageByIdController = new GetMessageByIdController(
    getMessageByIdUseCase
);

export { getMessageByIdUseCase, getMessageByIdController };