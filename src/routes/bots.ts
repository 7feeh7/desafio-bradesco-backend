import { Router } from "express";

const botsRouter = Router();

botsRouter.post('/', (request, response) => {
    return response.status(201).send();
});

botsRouter.get('/:id', (request, response) => {
    return response.status(201).send();
});

botsRouter.put('/:id', (request, response) => {
    return response.status(201).send();
});

botsRouter.delete('/:id', (request, response) => {
    return response.status(201).send();
});

export { botsRouter }