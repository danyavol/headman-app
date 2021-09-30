import { Router } from "express";
import { db } from "../../database/database";

const users = Router();
export default users;


users.get('/', async (req, res) => {
    const user = await db.User.find().exec();
    res.json(user);
});