const express = require("express");

const router = express.Router();

// ⚔️ Importacion para los contraladores ⚔️ //

const productControl = require("../controllers/products.controller");

// 🐧 Validacion de los middlewares 🐧 //
const productValid = require("../middlewares/userValidation");

router.route("/create").post(productControl.createProduct);

router.route("/allproduct").get(productControl.allProduct);

router.route("/:id").get(productControl.getProductForId);

router.route("/:id").put(productControl.updateProductForId);

router.route("/:id").delete(productControl.deleteProductForId);
