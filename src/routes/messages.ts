import { Router } from "express";

const messagesRouter = Router();

messagesRouter.post('/', (request, response) => {
    return response.status(201).send();
});

messagesRouter.get('/:id', (request, response) => {
    return response.status(201).send();
});

export { messagesRouter }