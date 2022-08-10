const { createError } = require("../../helpers");
const serviceContacts = require("../../services/contacts");

const updateContactById = async (req, res) => {
  const { id } = req.params;
  const result = await serviceContacts.updateContactById(id, req.body);
  if (!result) {
    throw createError(404);
  }
  res.json(result);
};

module.exports = updateContactById;
