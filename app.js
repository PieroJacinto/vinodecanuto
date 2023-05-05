// REQUERIMOS DOTENV PARA TENER VARIABLE DE ENTORNO
require("dotenv").config();

// REQUERIMOS EXPRESS
const express = require("express");

// REQUERIMOS MIDDLEWARES PARA CONFIGURAR APP Y LEVANTAR EL SERVIDOR
const createApp = require("./src/config/create-app");
const appConfig = require("./src/config/app-config");

// REQUERIMOS PATH Y STATIC PARA LAS RUTAS
const { join } = require("path");
const { static } = require("express");

// REQUERIMOS METHOD-OVERRIDE PARA CARGAR IMAGENES EN FORMULARIOS
const methodOverride = require("method-override");

// CREAMOS EXPRESS APP Y LEVANTAMOS EL SERVIDOR
const app = createApp();
appConfig.config(app);

// USAMOS STATIC Y JOIN PARA QUE TODO LO QUE AGREGEMOS AL HTML SE REDIRIJA A PUBLIC AUTOMATICAMENTE, Y ASI ACORTAR LAS RUTAS
app.use(static(join(__dirname, "..", "public")));

// configuramos express para recibir y parsear peticiones HTTP
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// INICIALIZAMOS METHOD-OVERRIDE
app.use(methodOverride("_method"));

//REQUERIMOS EL ROUTEADOR PRINCIPAL
const mainRouter = require("./src/routers/main-router");

// MONTAMOS MAIN ROUTER
app.use(mainRouter);