import { Router } from 'express';
import { UserRepository } from '../modules/user/repositories/UserRepositorie';


const userRoutes = Router();    //segregação
const useRepository = new UserRepository();

userRoutes.post('/sign-up', (request, response) => {
    useRepository.create(request, response);
});

userRoutes.post('/sign-in', (request, response) => {
    useRepository.login(request, response);
});

export { userRoutes };