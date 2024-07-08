// server.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware pour servir les fichiers statiques (par exemple, vos composants UI)
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});