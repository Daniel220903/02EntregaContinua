const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Entrega Continua con Docker y Jenkins - Demo OK');
});

app.listen(port, () => {
  console.log(`App corriendo en http://localhost:${port}`);
});
