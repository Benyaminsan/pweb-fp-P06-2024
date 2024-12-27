"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = authenticateToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtConfig_1 = require("../config/jwtConfig");
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token)
        return res.status(401).json({ message: 'Access token missing' });
    jsonwebtoken_1.default.verify(token, jwtConfig_1.JWT_SECRET, (err, user) => {
        if (err)
            return res.status(403).json({ message: 'Invalid token' });
        req.user = user;
        next();
    });
}
//# sourceMappingURL=authMiddleware.js.map