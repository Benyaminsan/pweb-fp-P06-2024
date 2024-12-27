import { User } from "../models/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { stat } from "fs";

export const login = async (req: Request, res: Response): Promise<void> => {
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

    // validasi role
    if (!validRoles.includes(role)) {
        res.status(400).json({
            status: 'failed',
            message: `Invalid role. Allowed roles: ${validRoles.join(', ')}`,
            data: {},
        });
        return;
    }

    try {
        const user = await User.findOne({ username });

        if (!user) {
            res.status(404).json({ 
                status: 'failed',
                message: 'User not found',
            });
            return;
        }

        // validasi role yg dikirim dgn role di database
        if (user.role !== role) {
            res.status(403).json({
                status: 'failed',
                message: 'Role mismatch',
                data: {},
            });
            return;
        }
        
        // validasi password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ 
                status: 'failed',
                message: 'Invalid credentials'
            });
            return;
        }

        // generate token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET as string,
            { expiresIn: '1h' }
        );
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