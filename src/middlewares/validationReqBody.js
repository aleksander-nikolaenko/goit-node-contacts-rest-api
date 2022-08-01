const { createError } = require("../helpers");

const validationReqBody = (schema) => (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    next(createError(400, "missing request body"));
    return;
  }

  const { error } = schema.validate(req.body);
  if (error) {
    const [details] = error.details;
    const { message, path } = details;
    const [fieldName] = path;
    if (details.type === "any.required") {
      next(createError(400, `missing required field ${fieldName}`));
      return;
    }
    next(createError(400, "Validation error, field " + message));
    return;
  }

  next();
};

module.exports = validationReqBody;
