import { Request, Response } from "express";

import Bot from "../database/schemas/Bot";

class BotController {
    async create(request: Request, response: Response) {
        try {
            const { id, name } = request.body;
            
            const bot = await Bot.create({ 
                id, 
                name 
            });

            await bot.save();

            return response.json({
                id: bot.id,
                name: bot.name
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

            const bot = await Bot.findOne({ id });

            return response.json({
                id: bot.id,
                name: bot.name
            });
        } catch (err) {
            console.error(err);
            return response.status(500).json({
                message: err
            });
        }
    }
    async get (request: Request, response: Response) {
        try {
            let botsNormalized = [];

            const bots = await Bot.find({});

            for (const bot of bots) {
                botsNormalized.push({ id: bot.id, name: bot.name });
            }

            return response.json(botsNormalized);
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
            
            await Bot.updateOne({ id }, { name });
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

            await Bot.deleteOne({ id });
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