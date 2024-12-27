import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { User } from './models/user';

// load environment variables
dotenv.config();

const seedUsers = async () => {
    try {
        // connect to the database
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log('Connected to MongoDB.');

        // hash password
        const hashedPassword = await bcrypt.hash('batusangkar123', 10);

        // create dummy users
        const users = [
            { username: 'admin', password: hashedPassword, role: 'ADMIN' },
            { username: 'tio', password: hashedPassword, role: 'USER' },
            { username: 'ichi', password: hashedPassword, role: 'ADMIN' },
        ];

        // isnert user into the database
        await User.insertMany(users);
        console.log('Dummy users seede.');

        // close database connection
        await mongoose.disconnect();
        console.log('Database connection closed.');
    }

    catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedUsers();