const express = require('express');

const { categoriesController } = require('../controllers');
const { bodyValidateName } = require('../middlewares/bodyValidateName');
const { bodyValidateAuthorization } = require('../middlewares/bodyValidateAuthorization');

const router = express.Router();

router.post('/', bodyValidateName, bodyValidateAuthorization,
categoriesController.createCategories);
router.get('/', bodyValidateAuthorization, categoriesController.findAllCategories);

module.exports = router;