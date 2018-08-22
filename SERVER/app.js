import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import client from './models/db';

const PORT = 3000;
const app = express();

app.set('json spaces', 4);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

client.query('SELECT * FROM "entries" LIMIT 100', (err, res) => {
  console.log(err, res.rows);
  client.end();
});

app.get('/', (req, res) => {
  res.status(200)
    .send('Welcome to MyDiary API');
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
