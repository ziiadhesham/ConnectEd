const { body } = require('express-validator');

exports.validateCreateUser = [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 6 }).withMessage('Password too short'),
  // other rules...
];
exports.validateLogin = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password is required'),
  ];
  exports.validateProfileUpdate = [
    body('username').optional().isLength({ min: 3 }).withMessage('Username too short'),
    body('bio').optional().isLength({ max: 160 }).withMessage('Bio too long'),
    body('profilePicture').optional().isURL().withMessage('Invalid profile picture URL'),
  ];
  exports.validatePasswordChange = [
    body('currentPassword').notEmpty().withMessage('Current password is required'),
    body('newPassword').isLength({ min: 6 }).withMessage('New password too short'),
  ];
  
  

