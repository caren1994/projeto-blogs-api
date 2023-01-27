const { Category } = require('../models');

const createCategories = async (name) => {
  const category = await Category.create({ name });
  if (!category) return { type: 'INTERNAL_SERVER_ERROR', message: 'server error' };

return { type: null, message: category.dataValues };
};
const findAllCategories = async () => {
const categories = await Category.findAll();
if (!categories) return { type: 'NOT_FOUND', message: 'categories not found' };
return { type: null, message: categories };
};
module.exports = { createCategories, findAllCategories };