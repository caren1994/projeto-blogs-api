const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
  const user = await User.findOne({ where: { email } });

  if (user) return { type: 'EXISTING_USER', message: 'User already registered' };
  
  const create = await User.create({ displayName, email, password, image });
  console.log(create);
  return { type: null, message: create.dataValues };
};
const findAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  if (!users) return { type: 'NOT_FOUND', message: 'users not found' };
return { type: null, message: users };
};

const findById = async (id) => {
const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
if (!user) return { type: 'NOT_FOUND', message: 'User does not exist' };
return { type: null, message: user.dataValues };
};
module.exports = {
  createUser,
  findAllUsers,
  findById,
};