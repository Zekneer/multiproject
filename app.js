const express = require('express');
const tableOfContentRouter = require('./routes/tableOfContentRouter');
const codeDictionaryRouter = require('./routes/codeDictionaryRouter');
const englishTrainerRouter = require('./routes/englishTrainerRouter');

const app = express();
app.use(express.json());

app.use('/public', express.static(`${__dirname}/static`));

app.use('/codeDictionary', codeDictionaryRouter);
app.use('/englishTrainer', englishTrainerRouter);
app.use('/', tableOfContentRouter);

app.listen(3000);
