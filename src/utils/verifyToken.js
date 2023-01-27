const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const verifyToken = (token) => {
  try {
    const tokenVerify = jwt.verify(token, secret);
    return { type: null, message: tokenVerify };
  } catch (err) {
    return { type: 'TOKEN_INVALID', message: 'Expired or invalid token' };
  }
};
module.exports = {
  verifyToken,
};