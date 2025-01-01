"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("@/controllers/userController");
const router = express_1.default.Router();
router.post('/add', userController_1.addUser);
router.get('/all', userController_1.getUsers);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map