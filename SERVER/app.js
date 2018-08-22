import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();

app.set('json spaces', 4);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200)
    .send('Welcome to MyDiary API');
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
