const { User } = require('../models');

const loginUser = async (email, password) => {
try {
  const exist = await User.findOne({ where: { email, password } });

  return { type: null, message: exist.dataValues };
} catch (err) {
  return { type: 'USER_INVALID', message: 'Invalid fields' };
}
};
module.exports = {
  loginUser,
};