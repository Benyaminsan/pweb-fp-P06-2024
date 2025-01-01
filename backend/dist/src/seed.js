"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = require("./models/user");
dotenv_1.default.config();
const seedUsers = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB.');
        const hashedPassword = await bcrypt_1.default.hash('batusangkar123', 10);
        const users = [
            { username: 'admin', password: hashedPassword, role: 'ADMIN' },
            { username: 'tio', password: hashedPassword, role: 'USER' },
            { username: 'ichi', password: hashedPassword, role: 'ADMIN' },
        ];
        await user_1.User.insertMany(users);
        console.log('Dummy users seede.');
        await mongoose_1.default.disconnect();
        console.log('Database connection closed.');
    }
    catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};
seedUsers();
//# sourceMappingURL=seed.js.map