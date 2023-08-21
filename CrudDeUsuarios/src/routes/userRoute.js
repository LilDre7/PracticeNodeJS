const express = require("express");

const router = express.Router();

// ⚔️ Importacion para los contraladores ⚔️ //
const userControl = require("../controllers/users.controller");

// 🐧 Validacion de los middlewares 🐧 //
const validUser = require("../middlewares/userValidation");

// ** Rutas especificas para los metodos de las peticiones ⚔️ ** //
router.route("/create").post(userControl.createUser);
router.route("/alluser").get(userControl.getAllProduct);
router.route("/:id").get(userControl.getUser);
router.route("/:id").put(userControl.updateUser);
router.route("/:id").delete(userControl.deleteUser);

module.exports = router;
