const express = require("express");
const router = express.Router();
const productController = require("../controllers/products");

router.post("/", productController.post);

router.get("/", productController.get);

router.get("/:id", productController.getOne);

router.put("/:id", productController.put);

router.delete("/:id", productController.del);

module.exports = router;
