import express, { json } from 'express';
import routes from './routes';

const app = express();

app.use(json());

app.get('/', (resquest, response) => {
  response.send('ok');
});

app.listen('3333', () => {
  console.log('Rodando back-end');
});
