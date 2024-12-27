import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware';
import { getItems } from '../controllers/adminController';

const router = express.Router();

router.get('/admin/items', authenticateToken, getItems);

// Add more routes here...

export default router;
