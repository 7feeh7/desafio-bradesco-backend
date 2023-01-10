import { Bot } from "../../entities/Bot";
import { IBotRepository } from "../../repositories/BotRepository";
import { ICreateBotRequestDTO, ICreateBotResponseDTO } from "./CreateBotDTO";

export class CreateBotUseCase {
    constructor(
        private botRepository: IBotRepository
    ) {}

    async execute(data: ICreateBotRequestDTO): Promise<ICreateBotResponseDTO> {
        const bot = new Bot(data);
        return await this.botRepository.create(bot);
    }
}