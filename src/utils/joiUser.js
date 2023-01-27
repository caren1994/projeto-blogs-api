const joi = require('joi');

const validateBody = (body) => joi.object({
    displayName: joi.string().min(8).required().messages({
      message: '"displayName" length must be at least 8 characters long',
    }),
    email: joi.string().email().required().messages({
      message: '"email" must be a valid email',
    }),
    password: joi.string().min(6).required().messages({
      message: '"password" length must be at least 6 characters long',
    }),
    image: joi.string(),

  }).validate(body);

module.exports = {
  validateBody,
};
