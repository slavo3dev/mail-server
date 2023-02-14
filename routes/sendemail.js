const express = require('express');
const router = express.Router();

// import from controllers
const {sendEmail} = require('../controllers/sendemail');

// import validators
const { userRegisterValidator } = require('../validators/validemail');
const { runValidation } = require('../validators');

router.post('/send_email',userRegisterValidator,runValidation,sendEmail);

module.exports = router;


