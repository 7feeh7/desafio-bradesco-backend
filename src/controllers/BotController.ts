import { Request, Response } from "express";
import { v4 } from "uuid";
import Bot from "../database/schemas/Bot";

class BotController {
    async create(request: Request, response: Response) {
        try {
            const { id, name } = request.body;
            
            const bot = await Bot.create({ id: (!id) ? v4() : id, name });

            await bot.save();

            return response.json(bot);
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
            const bot = await Bot.findById({ _id: id });

            return response.json({ id: bot.id, name: bot.name });
        } catch (err) {
            console.error(err);
            return response.status(500).json({
                message: err
            });
        }
    }
    async get (request: Request, response: Response) {
        try {
            const bots = await Bot.find({});
            return response.json(bots);
        } catch (err) {
            console.error(err);
            return response.status(500).json({
                message: err
            });
        }
    }
    async update(request: Request, response: Response) {
        try {
            const { id } = request.params;
            
            const { name } = request.body;
            
            await Bot.updateOne({ _id: id }, { name });
            return response.status(204).send();
        } catch (err) {
            console.error(err);
            return response.status(500).json({
                message: err
            });
        }
    }
    async delete(request: Request, response: Response) {
        try {
            const { id } = request.params;

            await Bot.deleteOne({ _id: id });
            return response.status(204).send();
        } catch (err) {
            console.error(err);
            return response.status(500).json({
                message: err
            });
        }
    }
}

export default new BotController;