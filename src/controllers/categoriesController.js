const { categoriesService } = require('../services');
const errorMap = require('../utils/errorMap');

const createCategories = async (req, res) => {
const { name } = req.body;
const { type, message } = await categoriesService.createCategories(name);
if (type) return res.status(errorMap.mapError(type)).json({ message });
return res.status(201).json(message);
};

const findAllCategories = async (_req, res) => {
  const { type, message } = await categoriesService.findAllCategories();
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};
module.exports = {
  createCategories,
  findAllCategories,
};