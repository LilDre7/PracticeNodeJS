// Se requiere el paquete express y morgan para poder usarlo en el archivo principal
const express = require("express");
const morgan = require("morgan");

// Se inicializa en una constante la variable app que es la que se exporta para usarla en el archivo principal
const app = express();

app.use(express.json());

// Morgan funciona para ver la peticiones de postman por consola
app.use(morgan());

// ** Routes ** //
const userRoutes = require("./routes/userRoute");

// ** Utilidades ** //
const AppError = require("./utils/appError");

// ** Middlewares de erroes ** //
const globalErrorHandler = require("./controllers/errorController");

// !! RUTAS FOR THE APPLICATION !! //
app.use("/api/v1/users", userRoutes);

app.use("*", (req, res, next) => {
  new AppError(
    `La ruta es incorrecta o no valida ${req.originalUrl} 🚑 `,
    404,
    "fail"
  );
});

app.use(globalErrorHandler);

// Se exporta el app para usarse en la conexion de la base de datos
module.exports = app;
