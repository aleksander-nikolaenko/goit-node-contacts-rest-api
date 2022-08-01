const { User } = require("../../models/user");

const getUserByEmail = (userEmail) => {
  const result = User.findOne({ email: userEmail }, "-createdAt -updatedAt");
  return result;
};

module.exports = getUserByEmail;
