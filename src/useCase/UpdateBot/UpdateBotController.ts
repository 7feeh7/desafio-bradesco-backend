import { Request, Response } from "express";
import { UpdateBotUseCase } from "./UpdateBotUseCase";

export class UpdateBotController {
    constructor(
        private updateBotUseCase: UpdateBotUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const { name } = request.body;

        try {
            await this.updateBotUseCase.execute({ id, name });
            
            return response.status(204).send();
        } catch (err) {
            return response.status(500).json({
                message: err.message
            });
        }
    }
}