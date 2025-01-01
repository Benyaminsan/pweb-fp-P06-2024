"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_connection_1 = require("./db-connection");
const auth_1 = __importDefault(require("./routes/auth"));
const errorHandler_1 = require("./middleware/errorHandler");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5050;
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
}));
app.use(express_1.default.json());
(0, db_connection_1.connectDB)();
app.get('/check', (req, res) => {
    res.status(200).json({
        status: 'succes',
        message: 'Hello World!',
        date: new Date().toUTCString()
    });
});
app.use(auth_1.default);
app.use(errorHandler_1.errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map