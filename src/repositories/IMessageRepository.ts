import { Message } from "../entities/Message";

export interface IMessageRepository {
    create(message: Message): Promise<Message>
    getByConversationId(conversationId: string): Promise<Message[]>
    getById(id: string): Promise<Message>
}