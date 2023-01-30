const Sequelize = require('sequelize');

const { BlogPost, PostCategory, Category, User } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const findId = async (id) => {
const post = await BlogPost.findOne({ where: { id },
include: [
  { model: Category, as: 'categories' }, 
  { model: User, as: 'user', attributes: { exclude: ['password'] } }] });

if (!post) return { type: 'NOT_FOUND', message: 'Post does not exist' };

return { type: null, message: post };
};

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
    ],
  });
  return posts;
};
const createPost = async (id, { title, content, categoryIds }) => {
  try {
const result = await sequelize.transaction(async (t) => {
  const newPost = await BlogPost.create({ title, content, userId: id }, { transaction: t });// cadastra o post no blogpost
  const categoryId = categoryIds.map((e) => ({ categoryId: e, postId: newPost.id }));
  // faz o map em categoryids para cadastrar no postcategories com o burk que cria varios registros de uma só vez
  await PostCategory.bulkCreate(categoryId, { transaction: t });
  return newPost;
});
const { message } = await findId(result.id);
return { type: null, message };
  } catch (err) {
    return { type: 'INVALID_CATEGORYID', message: 'one or more "categoryIds" not found' };
  }
};

module.exports = {
  createPost,
findId,
findAll,
};