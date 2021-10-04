import { Request, Response, Router } from "express";
import { db } from "@database/database";
import { DTO } from "@services/dto.service";
import { handleError } from "@services/error-handle.service";

const groups = Router();
export default groups;


groups.get('/', async (req: Request, res: Response) => {
    try {
        const userId = res.locals.user.userId;

        const myGroups = await db.Group.find( { members: { $elemMatch: { $eq: userId } } } );

        res.json( myGroups.map(g => DTO.group(g)) );
    } catch (err) {
        handleError(res, err);
    }
});

groups.post('/', async (req: Request, res: Response) => {
    try {
        const userId = res.locals.user.userId;
        const { name } = req.body;

        await db.Group.create({
            name, members: [userId]
        });

        res.sendStatus(204);
    } catch (err) {
        handleError(res, err);
    }
});

groups.put('/:groupId', async (req: Request, res: Response) => {
    try {
        const userId = res.locals.user.userId;
        const groupId = req.params.groupId;
        const { name } = req.body;
        

        await db.Group.findOneAndUpdate({groupId}, {name});

        res.sendStatus(204);
    } catch (err) {
        handleError(res, err);
    }
});