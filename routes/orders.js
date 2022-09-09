const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orders");

router.post("/", orderController.post);

router.get("/:id", orderController.getOne);

module.exports = router;
