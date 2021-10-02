import { Router } from "express";
import apiRoutes from "./api/api-routes-shell";
import auth from "./auth.routes";

const routes = Router();
export default routes;


routes.use('/auth', auth);
routes.use('/api', apiRoutes);