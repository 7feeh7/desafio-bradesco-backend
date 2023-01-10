import { IBotRepository } from "../../repositories/BotRepository";
import { IGetBotByIdResponseDTO } from "./GetBotByIdDTO";

export class GetBotByIdUseCase {
    constructor(
        private botRepository: IBotRepository
    ) {}

    async execute(id: string): Promise<IGetBotByIdResponseDTO> {
        return await this.botRepository.getById(id);
    }
}