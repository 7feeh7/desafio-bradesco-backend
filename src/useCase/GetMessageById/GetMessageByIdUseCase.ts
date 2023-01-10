import { IMessageRepository } from "../../repositories/IMessageRepository";
import { IGetMessageByIdResponseDTO } from "./GetMessageByIdDTO";

export class GetMessageByIdUseCase {
    constructor(
        private messageRepository: IMessageRepository
    ) {}

    async execute(id: string): Promise<IGetMessageByIdResponseDTO> {
        return await this.messageRepository.getById(id);
    }
}