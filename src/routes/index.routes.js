import express from 'express';
import auth_api from "./auth/index.js"
import chat_api from "./chat/index.js"
const router = express.Router();

router.use("/auth", auth_api)
router.use("/chat", chat_api)

export default router;
