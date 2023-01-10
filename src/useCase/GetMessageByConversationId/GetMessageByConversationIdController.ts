import { Request, Response } from "express";
import { GetMessageByConversationIdUseCase } from "./GetMessageByConversationIdUseCase";

export class GetMessageByConversationIdController {
    constructor(
        private getMessageByConversationIdUseCase: GetMessageByConversationIdUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { conversationId } = request.query;

        console.log(typeof conversationId)

        try {
            const messages = await this.getMessageByConversationIdUseCase.execute(conversationId);
            
            return response.status(200).json(messages);
        } catch (err) {
            return response.status(500).json({
                message: err.message
            });
        }
    }
}