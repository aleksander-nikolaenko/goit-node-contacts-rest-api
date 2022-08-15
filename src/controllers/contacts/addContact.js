const serviceContacts = require("../../services/contacts");

const addContact = async (req, res) => {
  const { id: owner } = req.user;
  const result = await serviceContacts.addContact({ ...req.body, owner });
  res.status(201).json({
    name: result.name,
    email: result.email,
    phone: result.phone,
    favorite: result.favorite,
    owner: result.owner,
    _id: result._id,
  });
};

module.exports = addContact;
