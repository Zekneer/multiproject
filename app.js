const express = require('express');

const app = express();

app.use((req, res) => {
  res.send('Main page!');
});

app.listen(3000);
