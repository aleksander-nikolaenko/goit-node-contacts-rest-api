const { Contact } = require("../../models/contact");

const getContactById = (id) => {
  const result = Contact.findById(id, "-createdAt -updatedAt").populate(
    "owner",
    "email subscription"
  );
  return result;
};

module.exports = getContactById;
