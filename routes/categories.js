const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categories");

router.post("/", (req, res) => {
  res.send(
    `create a new category with name: ${req.body.name} and description: ${req.body.description}`
  );
});

router.get("/", categoryController.get);

router.get("/:id", (req, res) => {
  res.send(`Send category whose id is ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`update category whose id is ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`delete category whose id is ${req.params.id}`);
});

module.exports = router;
