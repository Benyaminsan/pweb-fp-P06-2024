"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipment_controller_1 = require("../controllers/equipment.controller");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get('/all equipment', auth_1.authenticateOperator, equipment_controller_1.getAllEquipment);
router.post('/book-equipment', auth_1.authenticateOperator, equipment_controller_1.borrowEquipment);
router.get('/all-equipment', auth_1.authenticateOperator, equipment_controller_1.getBorrowedItems);
exports.default = router;
//# sourceMappingURL=operator.routes.js.map