const express = require('express');

const { postController } = require('../controllers');
const { bodyValidateUpdate } = require('../middlewares/bodyValidadeUpdate');
const { bodyValidateAuthorization } = require('../middlewares/bodyValidateAuthorization');
const { bodyValidatePost } = require('../middlewares/bodyValidatePost');

const router = express.Router();
router.delete('/:id', bodyValidateAuthorization, postController.deletePost);
router.put('/:id', bodyValidateAuthorization, bodyValidateUpdate, postController.updatePost);
router.get('/search', bodyValidateAuthorization, postController.search);
router.post('/', bodyValidateAuthorization, bodyValidatePost, postController.createPost);
router.get('/', bodyValidateAuthorization, postController.findAll);
router.get('/:id', bodyValidateAuthorization, postController.findId);

module.exports = router;