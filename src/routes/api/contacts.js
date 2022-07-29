const express = require("express");
const ctrlContacts = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validationReqBody } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = new express.Router();

router.get("/", ctrlWrapper(ctrlContacts.getContacts));

router.get("/:id", ctrlWrapper(ctrlContacts.getContactById));

router.post(
  "/",
  validationReqBody(schemas.add),
  ctrlWrapper(ctrlContacts.addContact)
);

router.delete("/:id", ctrlWrapper(ctrlContacts.deleteContactById));

router.put(
  "/:id",
  validationReqBody(schemas.add),
  ctrlWrapper(ctrlContacts.updateContactById)
);

router.patch(
  "/:id/favorite",
  validationReqBody(schemas.updateFavorite),
  ctrlWrapper(ctrlContacts.updateContactFavoriteById)
);

module.exports = router;
