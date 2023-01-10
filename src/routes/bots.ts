import { Router } from "express";
import BotController from "../controllers/BotController";

import { createBotController } from "../useCase/CreateBot";
import { getBotController } from "../useCase/GetBot"

const botsRouter = Router();

botsRouter.post('/', (request, response) => {
    return createBotController.handle(request, response)
});

botsRouter.get('/:id', BotController.getById);

botsRouter.get('/', (request, response) => {
    return getBotController.handle(request, response)
});

botsRouter.put('/:id', BotController.update);
botsRouter.delete('/:id', BotController.delete);

export default botsRouter;