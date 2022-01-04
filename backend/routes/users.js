const router = require("express").Router();
let User = require("../models/user.model");

// root URL is localhost:5000/users
//
// the first endpoint that handles HTTP Get requests
router.route("/").get((req, res) => {
  // User.find below is a mongoose function
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("New User ADDED!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
