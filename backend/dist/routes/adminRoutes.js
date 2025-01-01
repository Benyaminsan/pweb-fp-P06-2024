"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middleware/authMiddleware");
const adminController_1 = require("../controllers/adminController");
const router = express_1.default.Router();
router.get('/admin/items', authMiddleware_1.authenticateToken, adminController_1.getItems);
exports.default = router;
//# sourceMappingURL=adminRoutes.js.map