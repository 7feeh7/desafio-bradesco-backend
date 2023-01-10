import { Message } from "../../entities/Message";
import { IMessageRepository } from "../../repositories/IMessageRepository";
import { ICreateMessageRequestDTO, ICreateMessageResponseDTO } from "./CreateMessageDTO";

export class CreateMessageUseCase {
    constructor(
        private messageRepository: IMessageRepository
    ) {}

    async execute(data: ICreateMessageRequestDTO): Promise<ICreateMessageResponseDTO> {
        const message = new Message(data);
        return await this.messageRepository.create(message);
    }
}