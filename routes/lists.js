const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send(`create a new list`);
});

router.get("/", (req, res) => {
  res.json({ message: "list of all list" });
});

router.get("/:id", (req, res) => {
  res.send(`Send list whose id is ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`update list whose id is ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`delete list whose id is ${req.params.id}`);
});

module.exports = router;
