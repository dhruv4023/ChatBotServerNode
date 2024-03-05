import express from 'express';
import { createChat, getPaginatedChats,  updateChat, deleteChat, getChatByCollectionName } from '../../controllers/chat/chat.js';
import { verifyTokenAndRole } from '../../middlewares/auth.js';

const router = express.Router();

router.post('/create', verifyTokenAndRole(["admin"]), createChat);

router.get('/get', verifyTokenAndRole(["admin", "user"]), getPaginatedChats);

router.get('/get/:collectionName', verifyTokenAndRole(["admin","user"]), getChatByCollectionName);

router.put('/edit/:chatId', verifyTokenAndRole(["admin"]), updateChat);

router.delete('/del/:chatId', verifyTokenAndRole(["admin"]), deleteChat);

export default router;
