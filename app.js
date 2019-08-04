const express = require('express');
const homeRouter = require('./routes/homeRouter');

const app = express();
app.use('/public', express.static(`${__dirname}/static`));

app.use('/', homeRouter);

app.use((req, res) => {
  res.render('404.pug');
});

app.listen(3000);
