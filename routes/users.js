const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send(`create a new user`);
});

router.get("/", (req, res) => {
  res.send("list of all users");
});

router.get("/:id", (req, res) => {
  res.send(`Send user whose id is ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`update user whose id is ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`delete user whose id is ${req.params.id}`);
});

module.exports = router;
