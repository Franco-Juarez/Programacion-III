const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const errorHandler = require("./middleware/custom-error.middleware.js");
require("dotenv").config();

const { sequelize } = require("./models");

const rutaLibros = require("./routes/libros.routes");
const rutaComentarios = require("./routes/comentarios.routes.js");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware de seguridad
app.use(helmet());

// CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

// Middleware de parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Logging
if (process.env.NODE_ENV !== "test") {
  app.use(morgan("combined"));
}

// Rutas
app.use("/api", routes);
app.use("/api/libros", rutaLibros);
app.use("/api/comentarios", rutaComentarios);

// Health check en la raíz
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Deshabilite esto para tener nuestro propio manejo de errores
// Manejo de errores
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     error: 'Something went wrong!',
//     message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
//   });
// });

// Manejo de errores personalizados
app.use(errorHandler);

// Manejo de rutas no encontradas
app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Inicializar servidor
async function startServer() {
  try {
    // Probar conexión a la base de datos
    await sequelize.authenticate();
    console.log("✅ Database connection established successfully.");

    // En desarrollo, sincronizar modelos
    if (process.env.NODE_ENV === "development") {
      await sequelize.sync({ alter: false });
      console.log("✅ Database synchronized");
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(`🔗 API available at: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error("❌ Unable to start server:", error);
    // Continuar sin base de datos para desarrollo
    app.listen(PORT, () => {
      console.log(`⚠️  Server started without database on port ${PORT}`);
    });
  }
}

startServer();

// Manejo de cierre graceful
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  try {
    await sequelize.close();
  } catch (error) {
    console.error("Error closing database:", error);
  }
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("SIGINT received, shutting down gracefully");
  try {
    await sequelize.close();
  } catch (error) {
    console.error("Error closing database:", error);
  }
  process.exit(0);
});
