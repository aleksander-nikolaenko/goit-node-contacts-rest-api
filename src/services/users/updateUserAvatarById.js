const { User } = require("../../models/user");

const updateUserAvatarById = (userId, avatarUrl) => {
  const result = User.findByIdAndUpdate(
    userId,
    { avatarURL: avatarUrl },
    { new: true }
  );
  return result;
};

module.exports = updateUserAvatarById;
