const { postService } = require('../services');
const errorMap = require('../utils/errorMap');

const createPost = async (req, res) => {
const { id } = req.user;
console.log(req.user);
const { type, message } = await postService.createPost(id, req.body);
if (type) return res.status(400).json({ message });
res.status(201).json(message);
};

const findId = async (req, res) => {
const { id } = req.params;
const { type, message } = await postService.findId(id);
if (type) return res.status(errorMap.mapError(type)).json({ message });
res.status(200).json(message);
};
const findAll = async (req, res) => {
  const { type, message } = await postService.findAll();
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
  };

module.exports = {
  createPost,
  findId,
  findAll,
};
