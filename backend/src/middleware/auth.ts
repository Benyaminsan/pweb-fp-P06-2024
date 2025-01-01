import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateOperator = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token; 

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized. Please login first.' });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET as string); 
        
        if (user.role !== 'operator') {
            return res.status(403).json({ message: 'Forbidden. Access denied.' });
        }
        
        req.user = user;
        
        next();
    } catch (error) {    
        res.status(401).json({ message: 'Invalid token. Please login again.' });
    }
};
