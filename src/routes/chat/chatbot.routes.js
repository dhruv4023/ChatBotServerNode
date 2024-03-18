// routes.js

import express from 'express';
import { verifyTokenAndRole } from '../../middlewares/auth.js';
import upload from '../../middlewares/file_uploder.js';
import { askQuestion, createTmpChain } from '../../controllers/chat/chatbot.js';

const router = express.Router();

router.post("/ask/question", askQuestion)
// router.post("/ask/question", verifyTokenAndRole(["user", "admin"]), askQuestion)
router.post("/create/tmp/chain", verifyTokenAndRole(["user", "admin"]), upload.array("files"), createTmpChain)
// router.post("/query/ask/", askQuestion)

export default router;
