"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = async (req, res) => {
    const { username, password, role } = req.body;
    const validRoles = ['USER', 'ADMIN'];
    if (!username || !password || !role) {
        res.status(400).json({
            status: 'failed',
            message: 'Username, password, and role are required',
            data: {},
        });
        return;
    }
    if (!validRoles.includes(role)) {
        res.status(400).json({
            status: 'failed',
            message: `Invalid role. Allowed roles: ${validRoles.join(', ')}`,
            data: {},
        });
        return;
    }
    try {
        const user = await user_1.User.findOne({ username });
        if (!user) {
            res.status(404).json({
                status: 'failed',
                message: 'User not found',
            });
            return;
        }
        if (user.role !== role) {
            res.status(403).json({
                status: 'failed',
                message: 'Role mismatch',
                data: {},
            });
            return;
        }
        const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({
                status: 'failed',
                message: 'Invalid credentials'
            });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        user.token = token;
        await user.save();
        res.status(200).json({
            status: 'success',
            message: 'Login success',
            user: {
                username: user.username,
                role: user.role,
            },
            token
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'failed',
            message: 'Error logging in', error
        });
    }
};
exports.login = login;
//# sourceMappingURL=authController.js.map