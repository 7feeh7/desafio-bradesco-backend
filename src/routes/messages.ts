import { Router } from "express";
import MessageController from "../controllers/MessageController";

const messagesRouter = Router();

messagesRouter.post('/', MessageController.create);

messagesRouter.get('/:id', MessageController.getById);

messagesRouter.get('/', MessageController.getByConversationId);

export default messagesRouter;