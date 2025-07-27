// routes/userRoutes.js
import express from 'express';
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

// ✅ Protected route example
router.get('/me', verifyToken, (req, res) => {
  res.status(200).json({
    message: 'Authenticated user details',
    user: req.user, // contains `id` from the decoded token
  });
});

export default router;
