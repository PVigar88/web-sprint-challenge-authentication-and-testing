const User = require("../users/users-model");

const checkAuthPayload = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    next({ status: 422, message: "username and password required" });
  } else {
    next();
  }
};

const checkUsernameAvailable = async (req, res, next) => {
  const { username } = req.body;
  const userTaken = await User.findBy(username);

  if (userTaken) {
    next({ status: "422", message: "username taken" });
  } else {
    next();
  }
};

module.exports = { checkAuthPayload, checkUsernameAvailable };
