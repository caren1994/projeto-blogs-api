const bodyValidateName = (req, res, next) => {
const { name } = req.body;
if (!name || name.length === '') return res.status(400).json({ message: '"name" is required' });
next();
};
module.exports = {
  bodyValidateName,
};