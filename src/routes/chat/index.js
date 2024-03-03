import express from 'express';
const router = express.Router();

// importing base routes
import chatbotRoutes from './chatbot.routes.js';
import chatRoutes from './chat.routes.js';

// defining routes
router.use('/chatbot', chatbotRoutes);
router.use('/chat', chatRoutes);
// exporting router
export default router;
