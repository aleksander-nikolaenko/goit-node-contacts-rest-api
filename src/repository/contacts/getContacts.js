const { Contact } = require("../../models/contact");

const getContacts = (id, skip, limit, favorite) => {
  if (favorite) {
    const result = Contact.find(
      { owner: id, favorite: favorite },
      "-createdAt -updatedAt",
      {
        skip,
        limit: Number(limit),
      }
    ).populate("owner", "email subscription");

    return result;
  }

  const result = Contact.find({ owner: id }, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "email subscription");

  return result;
};

module.exports = getContacts;
