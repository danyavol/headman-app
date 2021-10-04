import { Router } from "express";
import groups from "./groups.routes";
import users from "./users.routes";

const apiRoutes = Router();
export default apiRoutes;


apiRoutes.use('/users', users);
apiRoutes.use('/groups', groups);