import express from 'express';
import { createChat, getPaginatedChats, updateChat, deleteChat, getChatByCollectionName } from '../../controllers/chat/chat.js';
import { verifyTokenAndRole } from '../../middlewares/auth.js';
import upload from '../../middlewares/file_uploder.js';

const router = express.Router();

router.post('/create', verifyTokenAndRole(["admin"]), upload.single("icon"), createChat);

router.put('/edit/:chatId', verifyTokenAndRole(["admin"]), upload.single("icon"), updateChat);

router.get('/get/:collectionName', verifyTokenAndRole(["admin", "user"]), getChatByCollectionName);

router.get('/get', verifyTokenAndRole(["admin", "user"]), getPaginatedChats);

router.delete('/del/:chatId', verifyTokenAndRole(["admin"]), deleteChat);

export default router;
