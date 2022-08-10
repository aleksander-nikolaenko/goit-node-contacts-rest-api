const { User } = require("../../models/user");

const getUserById = (id) => {
  const result = User.findById(id, "-createdAt -updatedAt");
  return result;
};

module.exports = getUserById;
