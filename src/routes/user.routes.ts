import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const UsersRouter = Router();

UsersRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    email,
    password,
  });

  // Com a atualização do TypeScript, isso se faz necessário
  const userWithoutPassword = {
    id: user.id,

    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };

  return response.json(userWithoutPassword);
});

export default UsersRouter;
