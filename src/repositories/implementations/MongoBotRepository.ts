import { Bot } from "../../entities/Bot";
import { IBotRepository } from "../BotRepository";
import MongooseBot from "../../database/schemas/Bot";

export class MongoBotRepository implements IBotRepository{
    async create(bot: Bot): Promise<any> {
        return await MongooseBot.create(bot);
    }
    async get(): Promise<any> {
        return await MongooseBot.find({});
    }
}