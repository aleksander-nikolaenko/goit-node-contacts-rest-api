const { createError } = require("../../helpers");
const serviceContacts = require("../../services/contacts");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await serviceContacts.getContactById(id);
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = getContactById;
