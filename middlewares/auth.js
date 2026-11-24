
function userToView(req, res, next) {
  res.local.user = req.session.user || null;
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
  return res.status(403).send("Acceso denegado: no tienes permisos de administrador");
}

module.exports = {
  userToView,
  isAuthenticated,
  isAdmin
};