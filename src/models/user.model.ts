import mongoose, { Document, Schema } from 'mongoose';

// Definisikan interface IUser
interface IUser extends Document {
  username: string;
  passwordHash: string;
  role: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, required: true, enum: ['admin', 'user'], default: 'user' },
});

const User = mongoose.model<IUser>('User', userSchema);

// Gunakan 'export type' untuk tipe IUser
export { User };
export type { IUser };
