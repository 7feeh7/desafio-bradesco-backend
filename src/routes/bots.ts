import { Router } from "express";
import BotController from "../controllers/BotController";

const botsRouter = Router();

botsRouter.post('/', BotController.create);
botsRouter.get('/:id', BotController.getById);
botsRouter.get('/', BotController.get);
botsRouter.put('/:id', BotController.update);
botsRouter.delete('/:id', BotController.delete);

export default botsRouter;