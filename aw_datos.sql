-- ===============================================================
-- APLICACIONES WEB · UCM · Curso 2026-2027
-- Centro de Formación · DATOS INICIALES OFICIALES (aw_datos.sql)
-- ===============================================================
-- IMPORTANTE: ejecutar aw_practica.sql ANTES de este archivo.
-- Pensado para una base de datos nueva, sin registros anteriores.
-- No modifica el esquema ni crea tablas adicionales.
-- IMPORTAR UNA SOLA VEZ: una segunda ejecución dará conflictos PK/UNIQUE.
-- Si ya tienes datos, haz copia antes de reinicializar el entorno.
-- Las cuentas y contraseñas son SOLO de demostración local.
-- Todos los usuarios de ejemplo: contrasena Aula2026! (TEXTO CLARO).
-- No reutilizar estas credenciales en sistemas reales ni públicos.
-- Foto de docente N: img/docentes/docenteNN.png
-- Imagen de curso N: img/cursos/cursoNN.png
-- Las imágenes se obtienen recortando los tableros asset_* con Asset Splitter.
-- Las tablas usuarios y aulas NO disponen de un campo de imagen.
-- El campo cursos.imagen/docentes.foto conserva SOLO la ruta relativa.
-- ===============================================================

USE aw_practica;
SET NAMES utf8mb4;
START TRANSACTION;

-- 1. USUARIOS: 2 administradores y 12 alumnos (claves en texto claro SOLO para el laboratorio)
INSERT INTO usuarios (id_usuario, nombre, email, password, rol, fecha_registro, activo) VALUES
(1, 'Laura Méndez', 'laura.mendez@cforma.test', 'Aula2026!', 'admin', '2026-11-01 10:00:00', 1),
(2, 'Carlos Ortega', 'carlos.ortega@cforma.test', 'Aula2026!', 'admin', '2026-11-01 10:00:00', 1),
(101, 'Daniel Ruiz', 'daniel.ruiz@cforma.test', 'Aula2026!', 'alumno', '2026-11-02 10:00:00', 1),
(102, 'Lucía Torres', 'lucia.torres@cforma.test', 'Aula2026!', 'alumno', '2026-11-02 10:00:00', 1),
(103, 'Sergio Martín', 'sergio.martin@cforma.test', 'Aula2026!', 'alumno', '2026-11-02 10:00:00', 1),
(104, 'Nuria Morales', 'nuria.morales@cforma.test', 'Aula2026!', 'alumno', '2026-11-02 10:00:00', 1),
(105, 'Hugo Romero', 'hugo.romero@cforma.test', 'Aula2026!', 'alumno', '2026-11-02 10:00:00', 1),
(106, 'Marta Castro', 'marta.castro@cforma.test', 'Aula2026!', 'alumno', '2026-11-02 10:00:00', 1),
(107, 'Sara Jiménez', 'sara.jimenez@cforma.test', 'Aula2026!', 'alumno', '2026-11-02 10:00:00', 1),
(108, 'Álvaro Díaz', 'alvaro.diaz@cforma.test', 'Aula2026!', 'alumno', '2026-11-02 10:00:00', 1),
(109, 'Claudia López', 'claudia.lopez@cforma.test', 'Aula2026!', 'alumno', '2026-11-02 10:00:00', 1),
(110, 'David Molina', 'david.molina@cforma.test', 'Aula2026!', 'alumno', '2026-11-02 10:00:00', 1),
(111, 'Elena Navarro', 'elena.navarro@cforma.test', 'Aula2026!', 'alumno', '2026-11-02 10:00:00', 1),
(112, 'Pablo Prieto', 'pablo.prieto@cforma.test', 'Aula2026!', 'alumno', '2026-11-02 10:00:00', 1);

-- 2. DOCENTES: foto según posición del tablero asset_docentes.png
INSERT INTO docentes (id_docente, nombre, email, especialidad, telefono, foto, activo) VALUES
(1, 'Miguel García', 'miguel.garcia@cforma.test', 'Desarrollo web', '600 001 101', 'img/docentes/docente01.png', 1),
(2, 'Ana López', 'ana.lopez@cforma.test', 'Bases de datos', '600 002 102', 'img/docentes/docente02.png', 1),
(3, 'Javier Ramos', 'javier.ramos@cforma.test', 'Ciberseguridad', '600 003 103', 'img/docentes/docente03.png', 1),
(4, 'Elena Salas', 'elena.salas@cforma.test', 'Análisis de datos', '600 004 104', 'img/docentes/docente04.png', 1),
(5, 'Carmen Soto', 'carmen.soto@cforma.test', 'Inteligencia artificial', '600 005 105', 'img/docentes/docente05.png', 1),
(6, 'David Martín', 'david.martin@cforma.test', 'Marketing digital', '600 006 106', 'img/docentes/docente06.png', 1),
(7, 'Beatriz Vega', 'beatriz.vega@cforma.test', 'Diseño gráfico', '600 007 107', 'img/docentes/docente07.png', 1),
(8, 'Luis Moreno', 'luis.moreno@cforma.test', 'Ofimática', '600 008 108', 'img/docentes/docente08.png', 1),
(9, 'Marta Ibáñez', 'marta.ibanez@cforma.test', 'Programación Python', '600 009 109', 'img/docentes/docente09.png', 1),
(10, 'Andrés Pérez', 'andres.perez@cforma.test', 'Sistemas informáticos', '600 010 110', 'img/docentes/docente10.png', 1),
(11, 'Natalia Cruz', 'natalia.cruz@cforma.test', 'Gestión de proyectos', '600 011 111', 'img/docentes/docente11.png', 1),
(12, 'Óscar Gil', 'oscar.gil@cforma.test', 'Accesibilidad web', '600 012 112', 'img/docentes/docente12.png', 1);

-- 3. AULAS (las imágenes de aula son recursos estáticos opcionales)
INSERT INTO aulas (id_aula, nombre, edificio, planta, capacidad, equipamiento, estado) VALUES
(1, 'Aula 101', 'Edificio A', '1', 30, 'Proyector, pizarra, wifi', 'activa'),
(2, 'Aula TIC 201', 'Edificio A', '2', 24, '24 ordenadores, proyector, wifi', 'activa'),
(3, 'Sala de seminarios', 'Edificio B', '0', 18, 'Pantalla, videoconferencia', 'activa'),
(4, 'Taller 1', 'Edificio B', '1', 20, 'Equipamiento de taller, mesas de trabajo', 'activa'),
(5, 'Aula colaborativa', 'Edificio C', '1', 28, 'Mesas móviles, panel digital', 'activa'),
(6, 'Salón de actos', 'Edificio C', '0', 80, 'Proyección, sonido, micrófonos', 'activa'),
(7, 'Aula 302', 'Edificio A', '3', 25, 'Proyector, wifi', 'activa'),
(8, 'Laboratorio 2', 'Edificio B', '2', 16, 'Puestos de prácticas, material de laboratorio', 'inactiva');

-- 4. CURSOS: imagen según posición del tablero asset_cursos.png
INSERT INTO cursos (id_curso, id_docente, id_aula, nombre, descripcion, fecha_inicio, fecha_fin, horario, plazas, imagen, estado) VALUES
(1, 1, 2, 'Desarrollo web con JavaScript', 'HTML, CSS, JavaScript y aplicaciones web interactivas.', '2027-01-11', '2027-03-12', 'Lunes y miércoles 17:00-19:00', 20, 'img/cursos/curso01.png', 'activo'),
(2, 2, 1, 'Bases de datos relacionales', 'Modelado relacional, SQL y MariaDB.', '2027-01-18', '2027-03-19', 'Martes y jueves 17:00-19:00', 22, 'img/cursos/curso02.png', 'activo'),
(3, 3, 3, 'Fundamentos de ciberseguridad', 'Amenazas comunes, controles y seguridad web.', '2027-02-01', '2027-04-16', 'Viernes 16:00-19:00', 15, 'img/cursos/curso03.png', 'activo'),
(4, 4, 5, 'Análisis de datos', 'Preparación, análisis y visualización de datos.', '2027-02-08', '2027-04-30', 'Lunes y miércoles 18:00-20:00', 24, 'img/cursos/curso04.png', 'activo'),
(5, 5, 6, 'Introducción a la inteligencia artificial', 'Conceptos, herramientas y casos de uso responsables.', '2027-03-01', '2027-05-07', 'Martes 16:00-19:00', 40, 'img/cursos/curso05.png', 'activo'),
(6, 6, 7, 'Marketing digital', 'Estrategia de contenidos y medición de campañas.', '2027-03-08', '2027-05-21', 'Jueves 17:00-19:00', 20, 'img/cursos/curso06.png', 'activo'),
(7, 7, 4, 'Diseño gráfico digital', 'Principios visuales y herramientas de diseño.', '2027-04-05', '2027-06-04', 'Miércoles 16:00-19:00', 18, 'img/cursos/curso07.png', 'activo'),
(8, 8, 1, 'Herramientas de ofimática', 'Documentos, hojas de cálculo y presentaciones.', '2027-01-25', '2027-03-26', 'Viernes 16:00-18:00', 25, 'img/cursos/curso08.png', 'inactivo');

-- 5. MATRÍCULAS: incluye activas y canceladas para probar filtros y reactivación
INSERT INTO matriculas (id_matricula, id_usuario, id_curso, fecha_matricula, estado) VALUES
(1, 101, 1, '2026-11-05 10:00:00', 'activa'),
(2, 102, 1, '2026-11-05 10:15:00', 'activa'),
(3, 103, 1, '2026-11-06 09:00:00', 'cancelada'),
(4, 104, 1, '2026-11-06 09:30:00', 'activa'),
(5, 101, 2, '2026-11-07 11:00:00', 'activa'),
(6, 105, 2, '2026-11-07 12:00:00', 'activa'),
(7, 106, 2, '2026-11-08 08:30:00', 'cancelada'),
(8, 102, 3, '2026-11-08 11:30:00', 'activa'),
(9, 107, 3, '2026-11-08 12:00:00', 'activa'),
(10, 108, 3, '2026-11-09 14:00:00', 'activa'),
(11, 103, 4, '2026-11-09 15:00:00', 'activa'),
(12, 109, 4, '2026-11-10 10:00:00', 'activa'),
(13, 110, 4, '2026-11-10 10:10:00', 'cancelada'),
(14, 104, 5, '2026-11-11 09:00:00', 'activa'),
(15, 111, 5, '2026-11-11 09:20:00', 'activa'),
(16, 112, 5, '2026-11-11 09:40:00', 'activa'),
(17, 105, 6, '2026-11-12 10:00:00', 'activa'),
(18, 106, 6, '2026-11-12 10:15:00', 'activa'),
(19, 107, 7, '2026-11-13 11:00:00', 'activa'),
(20, 108, 7, '2026-11-13 12:00:00', 'cancelada');

COMMIT;

-- CONSULTAS DE COMPROBACIÓN (opcionales):
SELECT COUNT(*) AS usuarios FROM usuarios;
SELECT COUNT(*) AS docentes FROM docentes;
SELECT COUNT(*) AS aulas FROM aulas;
SELECT COUNT(*) AS cursos FROM cursos;
SELECT COUNT(*) AS matriculas FROM matriculas;

-- Para probar reactivación: matrícula id=3, alumno 103 y curso 1.
-- El backend deberá verificar plazas, permisos y curso activo antes del UPDATE.
-- UPDATE matriculas SET estado = 'activa', fecha_matricula = NOW()
-- WHERE id_matricula = 3 AND estado = 'cancelada';