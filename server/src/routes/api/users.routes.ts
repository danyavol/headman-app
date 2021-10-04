import { Router } from "express";
import { db } from "@database/database";
import { DTO } from "@services/dto.service";

const users = Router();
export default users;


users.get('/', async (req, res) => {
    const users = await db.User.find();
    res.json( users.map(u => DTO.user(u)) );
});