const { Contact } = require("../../models/contact");

const updateContactFavoriteById = (contactId, value) => {
  const result = Contact.findByIdAndUpdate(contactId, value, {
    select: "-createdAt -updatedAt",
    new: true,
  });
  return result;
};

module.exports = updateContactFavoriteById;
