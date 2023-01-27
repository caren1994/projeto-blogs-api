const express = require('express');

const { userController } = require('../controllers');
const { bodyValidateUser } = require('../middlewares/bodyValidateUser');

const router = express.Router();

router.post('/', bodyValidateUser, userController.createUser);

module.exports = router;