import { Request, Response } from "express";
import { GetBotUseCase } from "./GetBotUseCase";

export class GetBotController {
    constructor(
        private getBotUseCase: GetBotUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const bots = await this.getBotUseCase.execute();
            
            return response.status(200).json(bots);
        } catch (err) {
            return response.status(500).json({
                message: err.message
            });
        }
    }
}