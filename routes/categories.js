const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categories");

router.post("/", categoryController.post);

router.get("/", categoryController.get);

router.get("/:id", categoryController.getOne);

router.put("/:id", categoryController.put);

router.delete("/:id", categoryController.del);

module.exports = router;
