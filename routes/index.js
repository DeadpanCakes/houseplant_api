const express = require("express");
const router = express.Router();
const categoriesRouter = require("./categories");
const productsRouter = require("./products");
const usersRouter = require("./users");
const listsRouter = require("./lists");

router.use("/categories", categoriesRouter);
router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/lists", listsRouter);

module.exports = router;
