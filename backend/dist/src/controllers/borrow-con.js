"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBorrowItems = void 0;
const borrow_item_1 = require("../models/borrow-item");
const getBorrowItems = (req, res) => {
    res.status(200).json(borrow_item_1.BorrowItem);
};
exports.getBorrowItems = getBorrowItems;
//# sourceMappingURL=borrow-con.js.map