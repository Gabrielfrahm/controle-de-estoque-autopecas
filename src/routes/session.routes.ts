import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessions = Router();

sessions.post('/', async (request, response) => {
  const { email, password } = request.body;
  const authenticateService = new AuthenticateUserService();

  const { user, token } = await authenticateService.execute({
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

  return response.json({ userWithoutPassword, token });
});

export default sessions;
