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
const cursosRoutes = require("./routes/cursos.web");
const cursosAPI = require("./routes/api/cursos.api");

const docentesRoutes = require("./routes/docentes.web");
const docentesAPI = require("./routes/api/docentes.api");

const aulasRoutes = require("./routes/aulas.web");
const aulasAPI = require("./routes/api/aulas.api");

const mis_matriculasRoutes = require("./routes/mis_matriculas.web");
const mis_matriculasAPI = require("./routes/api/mis_matriculas.api");


const accesibilidadRoutes = require("./routes/accesibilidad.web");


// usamos las rutas de / para las vistas y las /api para las de API REST
app.use("/", viewRoutes);
app.use("/cursos", cursosRoutes);
app.use("/api/cursos", cursosAPI);

app.use("/docentes", docentesRoutes);
app.use("/api/docentes", docentesAPI);

app.use("/aulas", aulasRoutes);
app.use("/api/aulas", aulasAPI);

app.use("/matriculas", mis_matriculasRoutes);
app.use("/api/matriculas", mis_matriculasAPI);

app.use("/accesibilidad", accesibilidadRoutes);


app.listen(PORT, () => {
  console.log(`Centro de formación esta en http://localhost:${PORT}`);
});