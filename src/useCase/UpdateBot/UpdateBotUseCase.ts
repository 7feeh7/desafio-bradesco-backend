import { Bot } from "../../entities/Bot";
import { IBotRepository } from "../../repositories/BotRepository";

export class UpdateBotUseCase {
    constructor(
        private botRepository: IBotRepository
    ) {}

    async execute(data: Bot): Promise<void> {
        const bot = new Bot(data);
        await this.botRepository.update(bot);
    }
}