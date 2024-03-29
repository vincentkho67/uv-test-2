const express = require("express");
const NoteController = require("../controller/noteController");
const router = express.Router();

router.get("/", NoteController.getAll);
router.post("/", NoteController.create);
router.get("/:id", NoteController.getOne);
router.put("/:id", NoteController.update);
router.delete("/:id", NoteController.delete);

module.exports = router;