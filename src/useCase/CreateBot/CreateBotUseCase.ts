import { Bot } from "../../entities/Bot";
import { IBotRepository } from "../../repositories/BotRepository";
import { ICreateBotRequestDTO, ICreateBotResponseDTO } from "./CreateBotDTO";

export class CreateBotUseCase {
    constructor(
        private botRepository: IBotRepository
    ) {}

    async execute(data: ICreateBotRequestDTO): Promise<ICreateBotResponseDTO> {
        const bot = new Bot(data);

        const botData = await this.botRepository.create(bot);

        const response = {
            id: botData.id,
            name: botData.name
        }

        return response;
    }
}