const jwt = require("jsonwebtoken");
const serviceUsers = require("../services/users");
const { createError } = require("../helpers");
const { SECRET_KEY } = process.env;

const validationToken = async (req, _, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(createError(401), "Not authorized");
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await serviceUsers.getUserById(id);
    if (!user || !user.token) {
      next(createError(401), "Not authorized");
    }
    req.user = user;
    next();
  } catch (error) {
    next(createError(401, error.message));
  }
};

module.exports = validationToken;
