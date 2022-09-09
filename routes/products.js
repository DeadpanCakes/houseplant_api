const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send(`create a new product`);
});

router.get("/", (req, res) => {
  res.json({ message: "list of all products" });
});

router.get("/:id", (req, res) => {
  res.send(`Send product whose id is ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`update product whose id is ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`delete product whose id is ${req.params.id}`);
});

module.exports = router;
