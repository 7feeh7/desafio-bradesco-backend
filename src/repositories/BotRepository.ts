import { Bot } from "../entities/Bot";

export interface IBotRepository {
    create(bot: Bot): Promise<Bot>
    update(bot: Bot): Promise<void>
    delete(id: string): Promise<void>
    get(): Promise<any>
    getById(id: string): Promise<Bot>
}