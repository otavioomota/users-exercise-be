import { Router } from 'express';
import UserController from './controllers/UserController';

const routes = new Router();

routes.get('/', UserController.index);
routes.get('/details/:id', UserController.index);

routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.delete);

export default routes;
