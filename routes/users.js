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

router.get("/", (req, res) => {
  return res.json({ message: "list of all users" });
});

router.get("/:id", (req, res) => {
  res.json({ message: `Send user whose id is ${req.params.id}` });
});

router.put("/:id", (req, res) => {
  res.json({ message: `update user whose id is ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `delete user whose id is ${req.params.id}` });
});

module.exports = router;
