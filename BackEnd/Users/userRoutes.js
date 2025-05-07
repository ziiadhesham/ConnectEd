// BackEnd/Users/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('./UserController');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;
