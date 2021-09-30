import { Router } from "express";
import apiRoutes from "./api/api.routes";

const routes = Router();
export default routes;


routes.use('/api', apiRoutes);