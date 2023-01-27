const joiUser = require('../utils/joiUser');

const bodyValidateUser = (req, res, next) => {
const { error } = joiUser.validateBody(req.body);
if (error) return res.status(400).json({ message: error.message });
next();
};
module.exports = {
  bodyValidateUser,
};
