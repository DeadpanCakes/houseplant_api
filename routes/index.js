const express = require("express");
const router = express.Router();
const categoriesRouter = require("./categories.js");

router.use("/categories", categoriesRouter);

module.exports = router;
