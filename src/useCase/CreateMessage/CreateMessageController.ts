import { Request, Response } from "express";
import { CreateMessageUseCase } from "./CreateMessageUseCase";

export class CreateMessageController {
    constructor(
        private createMessageUseCase: CreateMessageUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            conversationId,
            timestamp,
            from,
            to,
            text
        } = request.body;

        try {
            const message = await this.createMessageUseCase.execute({
                conversationId,
                timestamp,
                from,
                to,
                text
            });

            return response.status(201).json(message);
        } catch (err) {
            return response.status(500).json({
                message: err.message
            });
        }
    }
}