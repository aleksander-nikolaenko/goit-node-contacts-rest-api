const serviceContacts = require("../../repository/contacts");

const addContact = async (req, res) => {
  const { id: owner } = req.user;
  const result = await serviceContacts.addContact({ ...req.body, owner });
  res.status(201).json(result);
};

module.exports = addContact;
