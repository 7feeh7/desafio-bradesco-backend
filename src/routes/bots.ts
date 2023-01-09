import { Router } from "express";
import BotController from "../controllers/BotController";

const botsRouter = Router();

botsRouter.post('/', BotController.create);

botsRouter.get('/:id', BotController.findOne);

botsRouter.put('/:id', (request, response) => {
    return response.status(201).send();
});

botsRouter.delete('/:id', (request, response) => {
    return response.status(201).send();
});

export default botsRouter;