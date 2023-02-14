const { check } = require('express-validator');

exports.userRegisterValidator = [
    check('email')
        .not()
        .isEmpty()
        .withMessage('eMail is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
];