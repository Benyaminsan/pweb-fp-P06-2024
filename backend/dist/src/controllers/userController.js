"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.addUser = void 0;
const user_1 = require("../models/user");
const addUser = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const newUser = new user_1.User({ username, password, role });
        await newUser.save();
        res.status(201).json({ message: 'User added successfully', user: newUser });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.addUser = addUser;
const getUsers = async (req, res) => {
    try {
        const users = await user_1.User.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getUsers = getUsers;
//# sourceMappingURL=userController.js.map