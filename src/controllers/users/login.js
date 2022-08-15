const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const serviceUsers = require("../../services/users");
const { createError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await serviceUsers.getUserByEmail(email);
  if (!user) {
    throw createError(401, "Email or password is wrong");
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw createError(401, "Email or password is wrong");
  }
  if (!user.verify) {
    throw createError(401, "Email not verify");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "12h" });
  await serviceUsers.updateUserTokenById(user._id, { token });
  res.json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
