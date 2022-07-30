const express = require("express");
const ctrlContacts = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const { validationReqBody, validationToken } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const router = new express.Router();

router.get("/", validationToken, ctrlWrapper(ctrlContacts.getContacts));

router.get("/:id", validationToken, ctrlWrapper(ctrlContacts.getContactById));

router.post(
  "/",
  validationToken,
  validationReqBody(schemas.add),
  ctrlWrapper(ctrlContacts.addContact)
);

router.delete(
  "/:id",
  validationToken,
  ctrlWrapper(ctrlContacts.deleteContactById)
);

router.put(
  "/:id",
  validationToken,
  validationReqBody(schemas.add),
  ctrlWrapper(ctrlContacts.updateContactById)
);

router.patch(
  "/:id/favorite",
  validationToken,
  validationReqBody(schemas.updateFavorite),
  ctrlWrapper(ctrlContacts.updateContactFavoriteById)
);

module.exports = router;
