import { Router } from 'express';
import UserRouter from './user.routes';
import sessionRouter from './session.routes';

const routes = Router();

routes.use('/users', UserRouter);
routes.use('/sessions', sessionRouter);

export default routes;
