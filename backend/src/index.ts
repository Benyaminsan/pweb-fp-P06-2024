import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./db-connection";
import authRoutes from './routes/auth';
import { errorHandler } from './middleware/errorHandler';
import cors from 'cors';

// load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// konfigurasi cors
app.use(cors({
    origin: 'http://localhost:5173', // izinkan akses dri front-end
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // sesuaikan metoda yg diizinkan
    credentials: true, // jika ada cookie/session
}));

// middleware to parse JSON requests
app.use(express.json());

// connect to MongoDB
connectDB();

// endpoint health check
app.get('/check', (req, res) => {
    res.status(200).json({
        status: 'succes',
        message: 'Hello World!',
        date: new Date().toUTCString()
    });
});

// routes
app.use(authRoutes);

// error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})