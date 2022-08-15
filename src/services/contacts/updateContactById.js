const { Contact } = require("../../models/contact");

const updateContactById = (contactId, contact) => {
  const result = Contact.findByIdAndUpdate(contactId, contact, {
    select: "-createdAt -updatedAt",
    new: true,
  });
  return result;
};

module.exports = updateContactById;
