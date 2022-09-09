const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const authSubmitted = (req) => {
    return req.body.username && req.body.password;
  };
  if (authSubmitted(req)) {
    res.json({ message: "create a new user" });
  } else {
    res.status(400).json({ message: "Username and password required" });
  }
});

module.exports = router;
