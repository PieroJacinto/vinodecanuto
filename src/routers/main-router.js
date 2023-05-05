// REQUERIMOS ROUTER DE EXPRESS
const { Router } = require("express");

//EJECUTAMOS ROUTER
const router = Router();

//EXPORTAMOS ROUTER
module.exports = router;

// REQUERIMOS EL MAIN CONTROLLER
const mainController = require("../controllers/mainController");

// HACEMOS LAS PETICIONES GET Y PUT CON SUS RESPECTIVOS CONTROLADORES

// HOME
router.get("/", mainController.home);

// LISTA DE PRODUCTOS SEGUN CATEGORIA
router.get("/listaProductos", mainController.listaProductos);
router.get("/detalleProducto", mainController.detalleProducto);
router.get("/login", mainController.login);
router.post("/login", mainController.loginProcess);
router.get("/register", mainController.register);


