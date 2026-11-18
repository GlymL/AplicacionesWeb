const express = require('express');
const path = require("path");
require("dotenv").config();

PORT = process.env.PORT || 3000

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! cambio');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});