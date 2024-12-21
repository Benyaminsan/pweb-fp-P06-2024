import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model'; // Pastikan Anda memiliki model user

const JWT_SECRET = process.env.JWT_SECRET as string;

// Fungsi untuk autentikasi pengguna
export const authenticateUser = async (username: string, password: string): Promise<string | null> => {
  // Cari user berdasarkan username
  const user = await User.findOne({ username });
  
  if (!user) {
    return null; // Jika user tidak ditemukan
  }

  // Periksa password yang dimasukkan dengan password yang tersimpan
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

  if (isPasswordValid) {
    // Membuat JWT dengan data user dan role
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' } // Token kedaluwarsa dalam 1 jam
    );
    return token;
  }

  return null; // Jika password salah
};
