import { IBotRepository } from "../../repositories/BotRepository";

export class DeleteBotUseCase {
    constructor(
        private botRepository: IBotRepository
    ) {}

    async execute(id: string): Promise<void> {
        return await this.botRepository.delete(id);
    }
}