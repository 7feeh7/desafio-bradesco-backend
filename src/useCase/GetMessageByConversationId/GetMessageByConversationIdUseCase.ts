import { IMessageRepository } from "../../repositories/IMessageRepository";
import { IGetMessageByConversationIdResponseDTO } from "./GetMessageByConversationIdDTO";

export class GetMessageByConversationIdUseCase {
    constructor(
        private messageRepository: IMessageRepository
    ) {}

    async execute(id: string): Promise<IGetMessageByConversationIdResponseDTO> {
        return await this.messageRepository.getByConversationId(id);
    }
}