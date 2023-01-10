import { MongoMessageRepository } from "../../repositories/mongodb/MongoMessageRepository";
import { GetMessageByConversationIdController } from "./GetMessageByConversationIdController";
import { GetMessageByConversationIdUseCase } from "./GetMessageByConversationIdUseCase";

const mongoMessageRepository = new MongoMessageRepository();

const getMessageByConversationIdUseCase = new GetMessageByConversationIdUseCase(
    mongoMessageRepository
);

const getMessageByConversationIdController = new GetMessageByConversationIdController(
    getMessageByConversationIdUseCase
);

export { getMessageByConversationIdUseCase, getMessageByConversationIdController };