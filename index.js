const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Importar JSON
const items = require("./data/items.json");

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Ruta para enviar JSON
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Ruta por defecto
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
