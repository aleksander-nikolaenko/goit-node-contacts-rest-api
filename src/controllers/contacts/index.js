const getContacts = require("./getContacts");
const getContactById = require("./getContactsById");
const addContact = require("./addContact");
const deleteContactById = require("./deleteContactById");
const updateContactById = require("./updateContactsById");
const updateContactFavoriteById = require("./updateContactFavoriteById");

module.exports = {
  getContacts,
  getContactById,
  addContact,
  deleteContactById,
  updateContactById,
  updateContactFavoriteById,
};
