import { IBotRepository } from "../../repositories/BotRepository";
import { IGetBotResponseDTO } from "./GetBotDTO";

export class GetBotUseCase {
    constructor(
        private botRepository: IBotRepository
    ) {}

    async execute(): Promise<IGetBotResponseDTO> {
        let botsNormalized = [];

        const bots = await this.botRepository.get();

        for (const bot of bots) {
            botsNormalized.push({ id: bot.id, name: bot.name });
        }

        return botsNormalized;
    }
}