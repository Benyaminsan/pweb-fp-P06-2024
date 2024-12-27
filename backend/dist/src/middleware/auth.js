"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateOperator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateOperator = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized. Please login first.' });
    }
    try {
        const user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (user.role !== 'operator') {
            return res.status(403).json({ message: 'Forbidden. Access denied.' });
        }
        req.user = user;
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Invalid token. Please login again.' });
    }
};
exports.authenticateOperator = authenticateOperator;
//# sourceMappingURL=auth.js.map