const express = require('express');
const tableOfContentRouter = require('./routes/tableOfContentRouter');
const codeDictionaryRouter = require('./routes/codeDictionaryRouter');

const app = express();
app.use('/public', express.static(`${__dirname}/static`));

app.use('/codeDictionary', codeDictionaryRouter);
app.use('/', tableOfContentRouter);

app.listen(3000);
