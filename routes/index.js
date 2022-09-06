const express = require("express");
const router = express.Router();
const categoriesRouter = require("./categories");
const productsRouter = require("./products");
const usersRouter = require("./users");

router.use("/categories", categoriesRouter);
router.use("/products", productsRouter);
router.use("/users", usersRouter);

module.exports = router;
