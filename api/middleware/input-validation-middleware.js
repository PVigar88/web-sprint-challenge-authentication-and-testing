const User = require("../users/users-model");

const checkAuthPayload = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    res.json({ message: "username and password required" });
  } else {
    next();
  }
};

const checkUsernameAvailable = async (req, res, next) => {
  const { username } = req.body;
  await User.findBy({ username })
    .then((user) => {
      if (user.username) {
        res.json({ message: "username taken" });
      } else {
        next();
      }
    })
    .catch({ message: "username taken" });
};

module.exports = { checkAuthPayload, checkUsernameAvailable };
