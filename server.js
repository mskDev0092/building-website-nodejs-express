const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
