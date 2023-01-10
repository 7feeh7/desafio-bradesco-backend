import { Router } from "express";

import { createBotController } from "../useCase/CreateBot";
import { getBotController } from "../useCase/GetBot";
import { updateBotController } from "../useCase/UpdateBot";
import { deleteBotController } from "../useCase/DeleteBot";
import { getBotByIdController } from "../useCase/GetBotById"

const botsRouter = Router();

botsRouter.post('/', (request, response) => {
    return createBotController.handle(request, response);
});

botsRouter.get('/:id', (request, response) => {
    return getBotByIdController.handle(request, response);
});

botsRouter.get('/', (request, response) => {
    return getBotController.handle(request, response);
});

botsRouter.put('/:id', (request, response) => {
    return updateBotController.handle(request, response);
});

botsRouter.delete('/:id', (request, response) => {
    return deleteBotController.handle(request, response);
});

export default botsRouter;