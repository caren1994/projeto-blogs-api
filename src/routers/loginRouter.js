const express = require('express');

const { loginController } = require('../controllers');
const { bodyValidate } = require('../middlewares/bodyValidate');

const router = express.Router();

router.post('/', bodyValidate, loginController.loginUser);

module.exports = router;