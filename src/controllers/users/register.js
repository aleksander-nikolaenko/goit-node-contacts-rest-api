const bcrypt = require("bcryptjs");
const serviceUsers = require("../../services/users");
const { createError } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await serviceUsers.getUserByEmail(email);
  if (user) {
    throw createError(409, `Email in use`);
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await serviceUsers.addUser({
    ...req.body,
    password: hashPassword,
  });
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = register;
