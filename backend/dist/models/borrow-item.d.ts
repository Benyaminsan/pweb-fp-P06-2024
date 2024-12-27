import mongoose, { Document } from 'mongoose';
interface IBorrowItem extends Document {
    item_name: string;
    amount: number;
    borrow_date: Date;
    return_date: Date;
    borrower_name: string;
    officer_name: string;
}
export declare const BorrowItem: mongoose.Model<IBorrowItem, {}, {}, {}, mongoose.Document<unknown, {}, IBorrowItem> & IBorrowItem & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export {};
