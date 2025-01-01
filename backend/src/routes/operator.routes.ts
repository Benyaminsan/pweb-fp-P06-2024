import { Router } from 'express';
import { borrowEquipment, getAllEquipment, getBorrowedItems } from '../controllers/equipment.controller';
import { authenticateOperator } from '../middleware/auth';

const router = Router();

router.get('/all equipment', authenticateOperator, getAllEquipment); 

router.post('/book-equipment', authenticateOperator, borrowEquipment); 

router.get('/all-equipment', authenticateOperator, getBorrowedItems); 

export default router;
