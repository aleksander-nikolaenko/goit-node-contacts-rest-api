const { createError } = require("../../helpers");
const serviceContacts = require("../../services/contacts");

const deleteContactById = async (req, res) => {
  const { id } = req.params;
  const result = await serviceContacts.deleteContactById(id);
  if (!result) {
    throw createError(404);
  }
  res.json({
    message: "contact deleted",
  });
};

module.exports = deleteContactById;
