const Users = require("../users/users-model");

const checkAuthPayload = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    next({ status: 401, message: "username and password required" });
  } else {
    next();
  }
};

const checkUsernameAvailable = async (req, res, next) => {
  const { username } = req.body;
  await Users.findBy({ username })
    .then((user) => {
      if (user.username !== null) {
        next({ status: 401, message: "username taken" });
      } else {
        next();
      }
    })
    .catch({ status: 401, message: "username taken" });
};

module.exports = { checkAuthPayload, checkUsernameAvailable };
