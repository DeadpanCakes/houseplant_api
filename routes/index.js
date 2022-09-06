const express = require("express");
const router = express.Router();
const categoriesRouter = require("./categories");
const productsRouter = require("./products");

router.use("/categories", categoriesRouter);
router.use("/products", productsRouter);

module.exports = router;
