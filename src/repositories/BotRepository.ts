import { Bot } from "../entities/Bot";

export interface IBotRepository {
    create(bot: Bot): Promise<any>
    get(): Promise<any>
}