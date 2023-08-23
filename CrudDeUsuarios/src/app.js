// Se requiere el paquete express y morgan para poder usarlo en el archivo principal
const express = require("express");
const morgan = require("morgan");
// const cors = require("cors");

// Se inicializa en una constante la variable app que es la que se exporta para usarla en el archivo principal
const app = express();

app.use(express.json());

// Morgan funciona para ver la peticiones de postman por consola
app.use(morgan());

// Cors funciona para que las peticiones desde el front-end puedan llegar a nuestra api
// app.cors(cors());

// ** Routes ** //
// Users
const userRoutes = require("./routes/userRoute");

// Products
const productRoutes = require("./routes/productRoute");

// ** Utilidades ** //
const AppError = require("./utils/appError");

// ** Middlewares de erroes ** //
const globalErrorHandler = require("./controllers/errorController");

// !! RUTAS FOR THE APPLICATION !! //

// For Users
app.use("/api/v1/users", userRoutes);

// For Products
app.use("/api/v1/products", productRoutes);

// ** Middleware de errores ** //
app.use("*", (req, res, next) => {
  // !! Para todas las rutas que no sea correctas
  return next(
    new AppError(
      `La ruta es incorrecta o no valida ${req.originalUrl} 🚑 `,
      404
    )
  );
});

app.use(globalErrorHandler);

// Se exporta el app para usarse en la conexion de la base de datos
module.exports = app;
