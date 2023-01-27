const express = require('express');

const { userController } = require('../controllers');
const { bodyValidateUser } = require('../middlewares/bodyValidateUser');
const { bodyValidateAuthorization } = require('../middlewares/bodyValidateAuthorization');

const router = express.Router();

router.post('/', bodyValidateUser, userController.createUser);
router.get('/', bodyValidateAuthorization, userController.findAllUsers);
router.get('/:id', bodyValidateAuthorization, userController.findById);

module.exports = router;