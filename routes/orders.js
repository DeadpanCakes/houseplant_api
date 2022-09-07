const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send(`create a new order`);
});

router.get("/:id", (req, res) => {
  res.send(`Send order whose id is ${req.params.id}`);
});

module.exports = router;
