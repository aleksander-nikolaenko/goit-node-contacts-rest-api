const serviceUser = require("../../services/users");
const { createError } = require("../../helpers");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await serviceUser.getUserByVerificationToken(verificationToken);
  if (!user) {
    throw createError(404, "User not found");
  }
  await serviceUser.updateUserVerificationById(user._id);
  res.json({
    message: "Verification successful",
  });
};

module.exports = verifyEmail;
