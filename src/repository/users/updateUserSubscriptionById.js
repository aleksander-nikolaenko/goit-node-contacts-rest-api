const { User } = require("../../models/user");

const updateUserTokenById = (userId, userSubscription) => {
  const result = User.findByIdAndUpdate(
    userId,
    { subscription: userSubscription },
    {
      new: true,
      runValidators: true,
    }
  );
  return result;
};

module.exports = updateUserTokenById;
