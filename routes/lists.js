const express = require("express");
const router = express.Router();
const listController = require("../controllers/lists");

router.post("/", listController.post);

router.get("/", listController.get);

router.get("/:id", listController.getOne);

router.put("/:id", listController.put);

router.delete("/:id", listController.del);

module.exports = router;
