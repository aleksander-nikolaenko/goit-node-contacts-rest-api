const { Contact } = require("../../models/contact");

const updateContactFavoriteById = (contactId, value) => {
  const result = Contact.findByIdAndUpdate(contactId, value, { new: true });
  return result;
};

module.exports = updateContactFavoriteById;
