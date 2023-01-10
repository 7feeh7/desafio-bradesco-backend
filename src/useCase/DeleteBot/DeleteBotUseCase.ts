import { IBotRepository } from "../../repositories/IBotRepository";

export class DeleteBotUseCase {
    constructor(
        private botRepository: IBotRepository
    ) {}

    async execute(id: string): Promise<void> {
        return await this.botRepository.delete(id);
    }
}