import mongoose, { Document } from 'mongoose';
interface IItem extends Document {
    name: string;
    amount: number;
    condition: string;
    created_at: Date;
}
export declare const Item: mongoose.Model<IItem, {}, {}, {}, mongoose.Document<unknown, {}, IItem> & IItem & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export {};
