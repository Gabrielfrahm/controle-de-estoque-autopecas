import 'reflect-metadata';
import './database';
import express, { json } from 'express';
import routes from './routes';

const app = express();

app.use(json());

app.listen('3333', () => {
  console.log('Rodando back-end');
});
