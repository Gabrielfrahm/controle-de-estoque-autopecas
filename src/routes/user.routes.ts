import { Router } from 'express';

const UserRouter = Router();

UserRouter.get('/', async (request, response) => {
  return response.send('teste ok');
});

export default UserRouter;
