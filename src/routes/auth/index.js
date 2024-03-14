import express from 'express';
const router = express.Router();

// importing base routes
import userRoutes from './user.routes.js';
import authRoutes from './auth.routes.js';
import otpRoutes from './otp.routes.js';

// defining routes
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/mail', otpRoutes);

// exporting router
export default router;
