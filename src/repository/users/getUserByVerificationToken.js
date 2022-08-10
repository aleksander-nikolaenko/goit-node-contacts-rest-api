const { User } = require("../../models/user");

const getUserByVerificationToken = (userVerificationToken) => {
  const result = User.findOne(
    { verificationToken: userVerificationToken },
    "-createdAt -updatedAt"
  );
  return result;
};

module.exports = getUserByVerificationToken;
