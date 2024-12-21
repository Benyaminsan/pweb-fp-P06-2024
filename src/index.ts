import express from 'express';
import cors from 'cors';
import { connectDB } from './db-connection'; // Pastikan Anda memiliki koneksi DB
import * as authController from './controllers/auth.controller'; // Import controller untuk login

require('dotenv').config(); // Untuk menggunakan variabel lingkungan dari .env

const app = express();
const port = 4000;

// Middleware
app.use(express.json()); // Untuk menangani body request dalam format JSON
app.use(cors()); // Untuk menangani masalah CORS (Cross-Origin Resource Sharing)

// Koneksi ke database
connectDB();

// Route untuk login
app.post('/login', authController.loginUser);

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
