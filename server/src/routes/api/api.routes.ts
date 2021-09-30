import { Router } from "express";
import users from "./users.route";

const apiRoutes = Router();
export default apiRoutes;


apiRoutes.use('/users', users);

