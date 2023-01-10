import { IBotRepository } from "../../repositories/BotRepository";
import { IGetBotResponseDTO } from "./GetBotDTO";

export class GetBotUseCase {
    constructor(
        private botRepository: IBotRepository
    ) {}

    async execute(): Promise<IGetBotResponseDTO> {
        return await this.botRepository.get();
    }
}