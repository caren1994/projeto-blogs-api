const { loginService } = require('../services');
const { tokenGenerate } = require('../utils/tokenGenerate');
const errorMap = require('../utils/errorMap');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await loginService.loginUser(email, password);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  const payload = {
    email: message.email,
    id: message.id,
  };
  const token = tokenGenerate(payload);
  
  res.status(200).json({ token });
};
module.exports = { loginUser };