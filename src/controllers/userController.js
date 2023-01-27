const { userService } = require('../services');
const errorMap = require('../utils/errorMap');
const { tokenGenerate } = require('../utils/tokenGenerate');

const createUser = async (req, res) => {
const { displayName, email, password, image } = req.body;
const { type, message } = await userService.createUser(displayName, email, password, image);
if (type) return res.status(errorMap.mapError(type)).json({ message });
console.log(message);

const payload = {
email: message.email,
id: message.id,

};
const token = tokenGenerate(payload);
return res.status(201).json({ token });
};
const findAllUsers = async (req, res) => {
const { type, message } = await userService.findAllUsers();
if (type) return res.status(errorMap.mapError(type)).json({ message });
res.status(200).json(message);
};

const findById = async (req, res) => {
const { id } = req.params;
const { type, message } = await userService.findById(id);
if (type) return res.status(errorMap.mapError(type)).json({ message });
return res.status(200).json(message);
};
module.exports = {
  createUser,
  findAllUsers,
  findById,
};