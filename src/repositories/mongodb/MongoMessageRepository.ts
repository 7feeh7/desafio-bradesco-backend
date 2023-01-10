import { Message } from "../../entities/Message";
import { IMessageRepository } from "../IMessageRepository";
import MongooseMessage from "../../database/schemas/Message";

export class MongoMessageRepository implements IMessageRepository{
    async create(message: Message): Promise<Message> {
        return await MongooseMessage.create(message);
    }
    async getById(id: string): Promise<Message> {
        return await MongooseMessage.findOne({ id });
    }
    async getByConversationId(conversationId: string): Promise<Message[]> {
        return await MongooseMessage.find({ conversationId });
    }
}