const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const tokenGenerate = (payload) => 
  jwt.sign(payload, secret, {
    algorithm: 'HS256',
  });

module.exports = {
  tokenGenerate,
};
