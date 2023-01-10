import { Request, Response } from "express";
import { CreateBotUseCase } from "./CreateBotUseCase";

export class CreateBotController {
    constructor(
        private createBotUseCase: CreateBotUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id, name } = request.body;

        try {
            const bot = await this.createBotUseCase.execute({
                id: id,
                name
            });
            
            return response.status(200).json(bot);
        } catch (err) {
            return response.status(500).json({
                message: err.message
            });
        }
    }
}