// routes.js

import express from 'express';
import { verifyTokenAndRole } from '../../middlewares/auth.js';
import upload from '../../middlewares/file_uploder.js';
import { askQuestion } from '../../controllers/chat/chatbot.js';

const router = express.Router();

router.post("/query/ask/", verifyTokenAndRole(["user", "admin"]), askQuestion)
// router.post("/query/ask/", askQuestion)

export default router;
