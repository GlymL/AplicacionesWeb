// Paquetes que usamos
const express = require('express');
const ejs = require("ejs");
const path = require("path");
const session = require("express-session");

// Importamos .env
require("dotenv").config();

// Archivos que tienen logica necesaria
const { mariadbConnect } = require("./DB/mariadb");

// Para el puerto en caso de no estar definido se pone 3000
PORT = process.env.PORT || 3000;

const app = express();

// Se tiene que poner un engine para poder interpretar html o ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Para poder usar json y url. Tambien se pone que carpeta es la de los recursos estaticos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Funciones de auth 
function userToView(req, res, next) {
  res.locals.user = req.session.user || null;
  next(); // Pasamos al siguiente middleware
}

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  }
  // Si es petición API devuelve 401; si es vista, redirige al login
  // Veremos si ponemos la API detras del login
  //if (req.originalUrl.startsWith("/api")) {
    //return res.status(401).json({ error: "No autenticado" });
  //}
  return res.redirect("/login");
}

function isAdmin(req, res, next) {
  if (req.session.user && req.session.user.rol === "admin") {
    return next(); // Siguiente middleware
  }
  // Veremos si ponemos api detras del login
  //if (req.originalUrl.startsWith("/api")) {
    //return res.status(403).json({ error: "Acceso denegado: solo administradores" });
  //}
  return res.status(403).render("index", { ok: true, redirect: "/" });
}

// Para los logs
app.use((req, res, next) => {
  console.log(req.method, req.originalUrl);
  next(); // Pasamos al siguiente middleware
})

// Configuración de la sesion
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // debido a que estamos en http las cookies no son seguras
}))

app.use(userToView); // la variable user disponible en los ejs

mariadbConnect(); // Conectamos a la base de datos

// Importamos las rutas
const viewRoutes = require("./routes/views");
const authRoutes = require("./routes/auth.web");

const cursosRoutes = require("./routes/cursos.web");
const cursosAPI = require("./routes/api/cursos.api");

const docentesRoutes = require("./routes/docentes.web");
const docentesAPI = require("./routes/api/docentes.api");

const aulasRoutes = require("./routes/aulas.web");
const aulasAPI = require("./routes/api/aulas.api");

const mis_matriculasRoutes = require("./routes/mis_matriculas.web");
const mis_matriculasAPI = require("./routes/api/mis_matriculas.api");

const administracionRoutes = require("./routes/administracion.web");

const accesibilidadRoutes = require("./routes/accesibilidad.web");


// usamos las rutas de / para las vistas y las /api para las de API REST
//app.use("/", authRoutes) -> para el login
app.use("/", viewRoutes);
app.use("/", authRoutes);

// app.use("/cursos", isAuthenticated, cursosRoutes);
// app.use("/cursos", isAuthenticated, isAdmin, cursosRoutes); para admin
app.use("/cursos", isAuthenticated, cursosRoutes);
app.use("/api/cursos", cursosAPI);

app.use("/docentes", isAuthenticated, docentesRoutes);
app.use("/api/docentes", docentesAPI);

app.use("/aulas", isAuthenticated, aulasRoutes);
app.use("/api/aulas", aulasAPI);

app.use("/matriculas", isAuthenticated, mis_matriculasRoutes);
app.use("/api/matriculas", mis_matriculasAPI);

app.use("/administracion", isAuthenticated, isAdmin, administracionRoutes);

app.use("/accesibilidad", isAuthenticated, accesibilidadRoutes);

// Para paginas que no existe
app.use((req, res) => {
  res.status(404).render("404", { url: req.originalUrl });
})

app.listen(PORT, () => {
  console.log(`Centro de formación esta en http://localhost:${PORT}`);
});