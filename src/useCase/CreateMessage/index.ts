import { MongoMessageRepository } from "../../repositories/mongodb/MongoMessageRepository";
import { CreateMessageController } from "./CreateMessageController";
import { CreateMessageUseCase } from "./CreateMessageUseCase";

const mongoMessageRepository = new MongoMessageRepository();

const createMessageUseCase = new CreateMessageUseCase(
    mongoMessageRepository
);

const createMessageController = new CreateMessageController(
    createMessageUseCase
);

export { createMessageUseCase, createMessageController };