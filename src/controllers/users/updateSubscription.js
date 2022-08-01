const serviceUser = require("../../services/users");
const updateSubscription = async (req, res) => {
  const { _id: id } = req.user;
  const { subscription } = req.body;

  const result = await serviceUser.updateUserSubscriptionById(id, subscription);

  res.status(200).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = updateSubscription;
