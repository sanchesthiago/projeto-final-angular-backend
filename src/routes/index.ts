import { Router } from "express";
import statusRoute from './status.route';
import userRoutes from './user.route';
import productsRoutes from './product.route';

const routes = Router();

routes.use('/status', statusRoute);
routes.use('/user', userRoutes);
routes.use('/product', productsRoutes);

export default routes;