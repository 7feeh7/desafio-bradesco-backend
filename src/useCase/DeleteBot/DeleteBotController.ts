import { Request, Response } from "express";
import { DeleteBotUseCase } from "./DeleteBotUseCase";

export class DeleteBotController {
    constructor(
        private deleteBotUseCase: DeleteBotUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            await this.deleteBotUseCase.execute(id);
            
            return response.status(204).send();
        } catch (err) {
            return response.status(500).json({
                message: err.message
            });
        }
    }
}