const express = require('express');

const { userController } = require('../controllers');
const { bodyValidateUser } = require('../middlewares/bodyValidateUser');
const { bodyValidateAuthorization } = require('../middlewares/bodyValidateAuthorization');

const router = express.Router();
router.delete('/me', bodyValidateAuthorization, userController.deleteUser);
router.post('/', bodyValidateUser, userController.createUser);
router.get('/', bodyValidateAuthorization, userController.findAllUsers);
router.get('/:id', bodyValidateAuthorization, userController.findById);

module.exports = router;