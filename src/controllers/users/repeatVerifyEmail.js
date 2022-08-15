const { createError } = require("../../helpers");
const { sendVerifyEmail } = require("../../services/email");
const serviceUsers = require("../../services/users");

const repeatVerifyEmail = async (req, res) => {
  const { email } = req.body;

  const user = await serviceUsers.getUserByEmail(email);
  if (!user) {
    throw createError(404, "Email is wrong, user not found");
  }
  if (user.verify) {
    throw createError(400, "Verification has already been passed");
  }
  await sendVerifyEmail(user.email, user.verificationToken);
  res.json({
    message: "Verification email sent",
  });
};

module.exports = repeatVerifyEmail;
