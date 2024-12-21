import { Request, Response } from 'express';
import { authenticateUser } from '../services/auth.service';

// Fungsi untuk menangani login
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  try {
    // Panggil service untuk autentikasi dan mendapatkan token
    const token = await authenticateUser(username, password);

    if (token) {
      // Kirim token ke pengguna
      res.json({
        message: 'Login berhasil',
        token: token,
      });
    } else {
      // Jika username atau password salah
      res.status(401).json({ message: 'Username atau password salah' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
};
