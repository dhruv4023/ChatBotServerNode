import express from 'express';
import {
    deleteChatHistory,
    deleteQuestionFromHistory,
    getChatHistoryByUserId
} from '../../controllers/chat/chat_history.js';
import { verifyTokenAndRole } from '../../middlewares/auth.js';

const router = express.Router();

router.get('', verifyTokenAndRole(["user", "admin"]), getChatHistoryByUserId);

router.delete('', verifyTokenAndRole(["user", "admin"]), deleteChatHistory);
router.delete('/question/:id', verifyTokenAndRole(["user", "admin"]), deleteQuestionFromHistory);



export default router;
