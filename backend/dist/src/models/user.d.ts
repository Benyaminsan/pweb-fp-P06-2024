import mongoose, { Document } from 'mongoose';
declare enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}
interface IUser extends Document {
    username: string;
    password: string;
    role: Role;
    token?: string;
}
export declare const User: mongoose.Model<IUser, {}, {}, {}, mongoose.Document<unknown, {}, IUser> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export {};
