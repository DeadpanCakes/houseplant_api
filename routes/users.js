const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.post("/", userController.post);

router.get("/", userController.get);

router.get("/:id", userController.getOne);

router.put("/:id", userController.put);

router.delete("/:id", userController.del);

module.exports = router;
