const express = require("express");
const ctrlUsers = require("../../controllers/users");
const { ctrlWrapper } = require("../../helpers");
const {
  validationReqBody,
  validationToken,
  fileUpload,
} = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = new express.Router();

router.post(
  "/signup",
  validationReqBody(schemas.register),
  ctrlWrapper(ctrlUsers.register)
);

router.post(
  "/login",
  validationReqBody(schemas.register),
  ctrlWrapper(ctrlUsers.login)
);

router.get("/logout", validationToken, ctrlWrapper(ctrlUsers.logout));

router.get("/current", validationToken, ctrlWrapper(ctrlUsers.getCurrent));

router.patch(
  "/",
  validationToken,
  validationReqBody(schemas.update),
  ctrlWrapper(ctrlUsers.updateSubscription)
);

router.patch(
  "/avatars",
  validationToken,
  fileUpload.single("avatar"),
  ctrlWrapper(ctrlUsers.updateAvatar)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrlUsers.verifyEmail));
router.post(
  "/verify",
  validationReqBody(schemas.verify),
  ctrlWrapper(ctrlUsers.repeatVerifyEmail)
);

module.exports = router;
