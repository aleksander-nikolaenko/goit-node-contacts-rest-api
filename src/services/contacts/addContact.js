const { Contact } = require("../../models/contact");

const addContact = (contact) => {
  const result = Contact.create(contact);
  return result;
};

module.exports = addContact;
