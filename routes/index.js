const express = require("express");
const router = express.Router();
const categoriesRouter = require("./categories");
const productsRouter = require("./products");
const usersRouter = require("./users");
const listsRouter = require("./lists");
const orderRouter = require("./orders");
const loginRouter = require("./login");

router.use("/categories", categoriesRouter);
router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/lists", listsRouter);
router.use("/orders", orderRouter);
router.use("/login", loginRouter);

module.exports = router;
