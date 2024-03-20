import express from 'express';
import { verifyTokenAndRole } from '../../middlewares/auth.js';
import upload from '../../middlewares/file_uploder.js';
import { askQuestion, createTmpChain, tmpChainExistOrNot } from '../../controllers/chat/chatbot.js'; // Import the tmpChainExistOrNot function

const router = express.Router();

router.post("/ask/question", verifyTokenAndRole(["user", "admin"]), askQuestion);

router.post("/create/tmp/chain", verifyTokenAndRole(["user", "admin"]), upload.array("files"), createTmpChain);

router.get("/check/tmp/chain", verifyTokenAndRole(["user", "admin"]), tmpChainExistOrNot);

export default router;
