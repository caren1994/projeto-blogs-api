const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const user = await User.findOne({ where: { email } });

  if (user) return { type: 'EXISTING_USER', message: 'User already registered' };
  
  const create = await User.create({ displayName, email, password, image });
  console.log(create);
  return { type: null, message: create.dataValues };
};
module.exports = {
  createUser,
};