import express from 'express';
import {
    deleteChatHistory,
    getChatHistoryByUserId
} from '../../controllers/chat/chat.js';
import { verifyTokenAndRole } from '../../middlewares/auth.js';

const router = express.Router();

router.get('/history', verifyTokenAndRole(["user", "admin"]), getChatHistoryByUserId);

router.delete('/history/:id', verifyTokenAndRole(["user", "admin"]), deleteChatHistory);

export default router;
