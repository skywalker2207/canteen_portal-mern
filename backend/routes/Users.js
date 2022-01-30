var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");

// GET request
// Getting all the users
router.get("/", function (req, res) {
  User.find(function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request
// Add a user to db
router.post("/register", (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    date: req.body.date,
    type: req.body.type,
    password: req.body.password,
    rating: req.body.rating,
    rateCount: req.body.rateCount,
    batch: req.body.batch,
    age: req.body.age,
    shopName: req.body.shopName,
    open: req.body.open,
    close: req.body.close,
    phone: req.body.phone,
  });

  newUser
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// POST request
// Login
router.post("/login", (req, res) => {
  const email = req.body.email;
  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user email exists
    if (!user) {
      return res.status(404).json({
        error: "Email not found",
      });
    } else {
      res.send("Email Found");
      return user;
    }
  });
});

module.exports = router;
