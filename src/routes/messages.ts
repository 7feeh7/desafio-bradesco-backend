import { Router } from "express";

import { createMessageController } from "../useCase/CreateMessage";
import { getMessageByIdController } from "../useCase/GetMessageById";
import { getMessageByConversationIdController } from "../useCase/GetMessageByConversationId"

const messagesRouter = Router();

messagesRouter.post('/', (request, response) => {
    return createMessageController.handle(request, response);
});

messagesRouter.get('/:id', (request, response) => {
    return getMessageByIdController.handle(request, response);
});

messagesRouter.get('/', (request, response) => {
    return getMessageByConversationIdController.handle(request, response);
});

export default messagesRouter;