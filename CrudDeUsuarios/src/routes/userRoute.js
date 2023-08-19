const express = require("express");

const router = express.Router();

// ⚔️ Importacion para los contraladores ⚔️ //
const userControl = require("../controllers/users.controller");

router.post("/create", userControl.createUser);
router.get("/allproduct", userControl.getAllProduct);
router.get("/:id", userControl.getUser);
router.put("/:id", userControl.updateUser);
router.delete("/:id", userControl.deleteUser);

module.exports = router;
