import { Router } from "express";
import { getBorrowItems } from "../controllers/borrow-con";

const router = Router();

router.get("/borrows", getBorrowItems);

export default router;
