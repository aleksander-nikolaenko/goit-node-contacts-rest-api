const serviceContacts = require("../../services/contacts");

const getContacts = async (req, res) => {
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  const { id } = req.user;
  const result = await serviceContacts.getContacts(id, skip, limit, favorite);
  res.json(result);
};
module.exports = getContacts;
