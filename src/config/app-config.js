const { join } = require("path");

module.exports = {
    config(app) {
        // SETEAMOS LA APP PARA QUE CONTROLLER AUTOMATICAMENTE LEA LAS RUTAS
        app.set("view engine", "ejs");
        app.set("views", join(__dirname, "..", "views"));
    },
};