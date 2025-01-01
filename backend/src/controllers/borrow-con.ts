import { Request, Response } from "express";
import { BorrowItem } from "../models/borrow-item";

export const getBorrowItems = (req: Request, res: Response) => {
  res.status(200).json(BorrowItem);
};
