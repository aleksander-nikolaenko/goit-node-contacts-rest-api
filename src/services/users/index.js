const getUserByEmail = require("./getUserByEmail");
const getUserById = require("./getUserById");
const addUser = require("./addUser");
const updateUserTokenById = require("./updateUserTokenById");
const updateUserSubscriptionById = require("./updateUserSubscriptionById");
const updateUserAvatarById = require("./updateUserAvatarById");
const getUserByVerificationToken = require("./getUserByVerificationToken");
const updateUserVerificationById = require("./updateUserVerificationById");

module.exports = {
  getUserByEmail,
  getUserById,
  addUser,
  updateUserTokenById,
  updateUserSubscriptionById,
  updateUserAvatarById,
  getUserByVerificationToken,
  updateUserVerificationById,
};
