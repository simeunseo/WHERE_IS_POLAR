const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.get("/", Controller.getAllMessages);
router.post("/", Controller.addMessage);
router.get("/:id", Controller.getMessageById);
// router.put("/:id", Controller.updateMessage);
// router.delete("/:id", Controller.deleteMessage);

module.exports = router;
