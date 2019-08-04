const express = require('express');

const app = express();
app.use('/public', express.static(`${__dirname}/static`));

app.use((req, res) => {
  res.render('404.pug');
});

app.listen(3000);
