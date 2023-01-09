import { Router } from "express";

import { botsRouter } from "./bots";
import { messagesRouter } from "./messages";

const router = Router();

router.use('/bots', botsRouter);
router.use('/messages', messagesRouter);

export { router };


