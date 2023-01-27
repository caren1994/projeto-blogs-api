const errorMap = {
USER_INVALID: 400,
TOKEN_INVALID: 401,
NOT_FOUND: 404,
EXISTING_USER: 409,

};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};