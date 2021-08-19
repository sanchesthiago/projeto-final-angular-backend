import { Router } from "express";
import statusRoute from './status.route';
import userRoutes from './user.route';

const routes = Router();

routes.use('/status', statusRoute);
routes.use('/user', userRoutes);

export default routes;