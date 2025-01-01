"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const borrow_con_1 = require("../controllers/borrow-con");
const router = (0, express_1.Router)();
router.get("/borrows", borrow_con_1.getBorrowItems);
exports.default = router;
//# sourceMappingURL=borrow-routes.js.map