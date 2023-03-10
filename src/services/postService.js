const Sequelize = require('sequelize');
const { Op } = require('sequelize');
 // Existem muitos operadores a serem usados para a wherecláusula, disponíveis como Symbols de Op.

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
const updatePost = async (idUser, id, body) => {
  const { type, message } = await findId(id);
  if (type) return { type, message };

  if (message.userId !== idUser) { 
    return { type: 'WITHOUT_PERMISSION', message: 'Unauthorized user' }; 
  }

  await BlogPost.update(body, { where: { id } });

  const result = await findId(id);
  return { type: null, message: result.message };// ele retorna uma mensagem:post por isso o result.message
};
const deletePost = async (idUser, id) => {
 const { type, message } = await findId(id);
if (type) return { type, message };

if (message.userId !== idUser) { 
  return { type: 'WITHOUT_PERMISSION', message: 'Unauthorized user' }; 
}
await BlogPost.destroy({ where: { id } });
return { type: null, message: '' };
};

const search = async (q) => {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [// SELECT * FROM post WHERE authorId = 12 OR authorId = 13; ou o titulo ou o content tem q ter o q
        { title: { [Op.like]: `%${q}%` } }, // LIKE '%hat'
        { content: { [Op.like]: `%${q}%` } },
      ],
    },
    include: [
      { model: Category, as: 'categories' }, 
      { model: User, as: 'user', attributes: { exclude: ['password'] } }],
  });

  return { message: posts };
};

module.exports = {
  createPost,
findId,
findAll,
updatePost,
deletePost,
search,
};