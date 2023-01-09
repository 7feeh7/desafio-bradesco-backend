import { Request, Response } from "express";
import Bot from "../database/schemas/Bot";
import { v4 } from "uuid"

class BotController {
    async create(request: Request, response: Response) {
        try {
            const { name } = request.body;
            
            const bot = await Bot.create({
                id: v4(),
                name
            });
            return response.json(bot)
        } catch (err) {
            console.error(err);
            return response.status(500).json({
                message: err
            })
        }
    }
    async findOne(request: Request, response: Response) {
        try {
            const { id } = request.params
            const bots = Bot.find({ id });
            return response.json(bots);
        } catch (err) {
            console.error(err);
            return response.status(500).json({
                message: err
            }) 
        }
    }
}

export default new BotController;