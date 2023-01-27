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
module.exports = {
  createUser,
};