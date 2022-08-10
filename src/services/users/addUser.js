const { User } = require("../../models/user");

const addUser = (user) => {
  const result = User.create(user);
  return result;
};

module.exports = addUser;
