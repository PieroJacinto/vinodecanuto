const express = require("express");
require("dotenv").config()

module.exports = function createExpressApp() {
    // EJECUTAMOS EXPRESS
    const app = express();
    // CREAMOS CONSTANTE CON EL PUERTO QUE ESTA EN LA VARIABLE DE ENTORNO
    const PORT = process.env.PORT ?? 3000;
    
    //ESCUCHAMOS EL PUERTO Y LEVANTAMOS SERVIDOR
    app.listen(PORT, () => {
        console.log(`Servidor de express escuchando puerto ${PORT}`);
    });

    // HACEMOS RETURN DE LA APP PARA REQUERIRLA EN APP.JS
    return app;
};
