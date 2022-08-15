const { User } = require("../../models/user");

const updateUserVerificationById = (userId) => {
  const result = User.findByIdAndUpdate(
    userId,
    {
      verificationToken: "",
      verify: true,
    },
    {
      new: true,
    }
  );
  return result;
};

module.exports = updateUserVerificationById;
