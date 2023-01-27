const { verifyToken } = require('../utils/verifyToken');
const errorMap = require('../utils/errorMap');

const bodyValidateAuthorization = async (req, res, next) => {
const { authorization } = req.headers;
if (!authorization) return res.status(401).json({ message: 'Token not found' });
const { type, message } = verifyToken(authorization);
if (type) return res.status(errorMap.mapError(type)).json({ message });
next();
};
module.exports = {
  bodyValidateAuthorization,
};