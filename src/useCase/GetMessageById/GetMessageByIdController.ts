import { Request, Response } from "express";
import { GetMessageByIdUseCase } from "./GetMessageByIdUseCase";

export class GetMessageByIdController {
    constructor(
        private getMessageByIdUseCase: GetMessageByIdUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const message = await this.getMessageByIdUseCase.execute(id);
            
            return response.status(200).json(message);
        } catch (err) {
            return response.status(500).json({
                message: err.message
            });
        }
    }
}