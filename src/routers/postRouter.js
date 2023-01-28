const express = require('express');

const { postController } = require('../controllers');
const { bodyValidateAuthorization } = require('../middlewares/bodyValidateAuthorization');
const { bodyValidatePost } = require('../middlewares/bodyValidatePost');

const router = express.Router();
router.post('/', bodyValidateAuthorization, bodyValidatePost, postController.createPost);
router.get('/', bodyValidateAuthorization, postController.findAll);
router.get('/:id', bodyValidateAuthorization, postController.findId);

module.exports = router;