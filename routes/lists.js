const express = require("express");
const router = express.Router();
const listController = require("../controllers/lists");

router.post("/", listController.post);

router.get("/", listController.get);

router.get("/:id", listController.getOne);

router.put("/:id", listController.put);

router.put("/:id/add/:product", listController.addItem);

router.put("/:id/remove/:listing", listController.removeItem);

router.delete("/:id", listController.del);

module.exports = router;
