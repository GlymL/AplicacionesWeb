const express = require('express');
const ejs = require("ejs");
const path = require("path");

require("dotenv").config();

const { mariadbConnect } = require("./services/mariadb");

PORT = process.env.PORT || 3000;

const app = express();

// Se tiene que poner un engine para poder interpretar html o ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares, necesario para interpretar json, url y tener la carpeta de public accesible. 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

mariadbConnect();

// importamos los archivos de rutas
const viewRoutes = require("./routes/views");
const cursosRoutes = require("./routes/cursos");

// usamos las rutas de / para las vistas y las /api para las de API REST
app.use("/", viewRoutes);
app.use("/cursos", cursosRoutes);


app.listen(PORT, () => {
  console.log(`Centro de formación esta en http://localhost:${PORT}`);
});