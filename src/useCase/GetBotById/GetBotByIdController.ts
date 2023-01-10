import { Request, Response } from "express";
import { GetBotByIdUseCase } from "./GetBotByIdUseCase";

export class GetBotByIdController {
    constructor(
        private getBotByIdUseCase: GetBotByIdUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const bot = await this.getBotByIdUseCase.execute(id);
            
            return response.status(200).json(bot);
        } catch (err) {
            return response.status(500).json({
                message: err.message
            });
        }
    }
}