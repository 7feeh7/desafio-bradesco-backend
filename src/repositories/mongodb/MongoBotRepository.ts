import { Bot } from "../../entities/Bot";
import { IBotRepository } from "../BotRepository";
import MongooseBot from "../../database/schemas/Bot";

export class MongoBotRepository implements IBotRepository{
    async create(bot: Bot): Promise<Bot> {
        return await MongooseBot.create(bot);
    }
    async update(bot: Bot): Promise<void> {
        await MongooseBot.updateOne(bot)
    }
    async get(): Promise<any> {
        return await MongooseBot.find({});
    }
    async delete(id: string): Promise<void> {
        await MongooseBot.deleteOne({ id });
    }
    async getById(id: string): Promise<Bot> {
        return await MongooseBot.findOne({ id });
    }
}