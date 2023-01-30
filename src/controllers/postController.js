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
  const posts = await postService.findAll();
  
  res.status(200).json(posts);
  };
  const updatePost = async (req, res) => {
    const { id: idUser } = req.user;// recupera o iduser que foi enviado na verificação da authorization
    const { id } = req.params;
  
    const { type, message } = await postService.updatePost(idUser, id, req.body);
  
    if (type) return res.status(401).json({ message });
  
    res.status(200).json(message);
  };
  const deletePost = async (req, res) => {
const { id: idUser } = req.user;
const { id } = req.params;
const { type, message } = await postService.deletePost(idUser, id);
if (type === 'NOT_FOUND') return res.status(404).json({ message });
if (type) return res.status(401).json({ message });

return res.status(204).json();
  };

  const search = async (req, res) => {
    const { q } = req.query;

    if (!q) {
      const posts = await postService.findAll();
      return res.status(200).json(posts);
    }
    
    const { message } = await postService.search(q);
  
    res.status(200).json(message);
  };

module.exports = {
  createPost,
  findId,
  findAll,
  updatePost,
  deletePost,
  search,
};
