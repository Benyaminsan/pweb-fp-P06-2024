import mongoose, { Schema, Document } from 'mongoose';

enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

interface IUser extends Document {
    username: string;
    password: string;
    role: Role;
    token?: string;
}

const UserSchema: Schema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(Role), default: Role.USER },
    token: { type: String }
});

export const User = mongoose.model<IUser>('User', UserSchema);