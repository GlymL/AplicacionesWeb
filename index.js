const express = require('express');
const ejs = require("ejs");
const path = require("path");

require("dotenv").config();

const db = require("./database");

PORT = process.env.PORT || 3000

// importamos los archivos de rutas
const viewRoutes = require("./routes/views")

const app = express();

// Se tiene que poner un engine para poder interpretar html o ejs
app.engine("html", ejs.renderFile)
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

// Middlewares, necesario para interpretar json, url y tener la carpeta de public accesible. 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// usamos las rutas de / para las vistas y las /api para las de API REST
app.use("/", viewRoutes);

db()

app.listen(PORT, () => {
  console.log(`Centro de formación esta en http://localhost:${PORT}`);
});