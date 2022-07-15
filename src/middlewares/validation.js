const Joi = require("joi");
const { createError } = require("../helpers");

const addSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email({ tlds: false }).required(),
  phone: Joi.string()
    .pattern(/^\(([0-9]{3})\)([ ])([0-9]{3})([-])([0-9]{4})$/)
    .required(),
});

const validation = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  const { method } = req;
  if (error) {
    const [details] = error.details;
    let { message } = details;
    if (details.type === "any.required") {
      if (method === "PUT") {
        message = "missing fields";
      } else {
        message = "missing required name field";
      }
      next(createError(400, message));
      return;
    }
    next(createError(400, "Validation error, field " + message));
    return;
  }

  next();
};

const validateContactBody = validation(addSchema);

module.exports = {
  validateContactBody,
};
