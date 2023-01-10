import { Request, Response } from "express";

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
                conversationId,
                timestamp,
                from,
                to,
                text
            });

            await message.save();

            return response.json({
                id: message.id,
                conversationId: message.conversationId,
                timestamp: message.timestamp,
                from: message.from,
                to: message.to,
                text: message.text
            });
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

            return response.json({
                id: message.id,
                conversationId: message.conversationId,
                timestamp: message.timestamp,
                from: message.from,
                to: message.to,
                text: message.text
            });

        } catch (err) {
            console.error(err);
            return response.status(500).json({
                message: err
            });
        }
    }
    async getByConversationId(request: Request, response: Response) {
        try {
            let messagesNormalized = [];

            const { conversationId } = request.query;

            const messages = await Message.find({ conversationId });

            for (const message of messages) {
                messagesNormalized.push({
                    id: message.id,
                    conversationId: message.conversationId,
                    timestamp: message.timestamp,
                    from: message.from,
                    to: message.to,
                    text: message.text
                });
            }

            return response.json(messagesNormalized);
        } catch (err) {
            console.error(err);
            return response.status(500).json({
                message: err
            });
        }
    }
}

export default new MessageController;