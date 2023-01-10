import { Request, Response } from "express";
import { v4 } from "uuid";
import Message from "../database/schemas/Message";

class MessageController {
    async create(request: Request, response: Response) {
        try {
            const { 
                conversationId,
                timestamp,
                from,
                to,
                text
            } = request.body;
            
            const message = await Message.create({
                id: v4(),
                conversationId,
                timestamp,
                from,
                to,
                text
            });

            await message.save();

            return response.json(message);
        } catch (err) {
            console.error(err);
            return response.status(500).json({
                message: err
            });
        }
    }
    async getById(request: Request, response: Response) {
        try {
            const { id } = request.params;

            const message = await Message.findOne({ id });

            return response.json(message);

        } catch (err) {
            console.error(err);
            return response.status(500).json({
                message: err
            });
        }
    }
    async getByConversationId(request: Request, response: Response) {
        try {
            const { conversationId } = request.query;

            const messages = await Message.find({ conversationId });
            
            return response.json(messages);
        } catch (err) {
            console.error(err);
            return response.status(500).json({
                message: err
            });
        }
    }
}

export default new MessageController;