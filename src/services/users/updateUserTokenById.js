const { User } = require("../../models/user");

const updateUserTokenById = (userId, token) => {
  const result = User.findByIdAndUpdate(userId, token, { new: true });
  return result;
};

module.exports = updateUserTokenById;
