const { Contact } = require("../../models/contact");

const deleteContactById = (contactId) => {
  const result = Contact.findByIdAndRemove(contactId);
  return result;
};

module.exports = deleteContactById;
