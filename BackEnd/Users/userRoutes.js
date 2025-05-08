const express = require('express');
const router = express.Router();
const userController = require('./UserController');
const authMiddleware = require('../Middleware/authenticate');

router.get('/', userController.getAllUsers); // public
router.post('/', userController.createUser); // public
router.post('/login', userController.loginUser); // public

router.put('/profile', authMiddleware, userController.updateUserProfile); // protected
router.put('/password', authMiddleware, userController.changePassword);   // protected
router.post('/:id/follow', authMiddleware, userController.toggleFollow);        // protected

module.exports = router;
