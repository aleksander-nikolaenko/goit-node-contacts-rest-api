const serviceUsers = require("../../services/users");

const logout = async (req, res) => {
  const { _id: id } = req.user;
  await serviceUsers.updateUserTokenById(id, { token: "" });
  res.status(204).send();
};

module.exports = logout;
