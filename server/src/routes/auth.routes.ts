import { Router } from "express";

import { db } from "@database/database";
import { Crypto } from "@services/crypto.service";
import { handleError } from "@services/error-handle.service";
import { createToken } from "@services/auth.service";
import { MONTH } from "@constants/time.constant";

const auth = Router();
export default auth;




auth.post('/register', async (req, res) => {
    const { password, username } = req.body;
    try {
        const newUser = new db.User({ password, username });
        await newUser.validate();
        newUser.password = Crypto.encrypt(newUser.password);
        await newUser.save({ validateBeforeSave: false });

        await createToken(req, res, newUser.userId);

        res.sendStatus(204);
    } catch (err) {
        handleError(res, err);
    }
});

auth.post('/login', async (req, res) => {
    const { password, username, saveMe } = req.body;
    try {
        const user = await db.User.findOne({username});
        if (!user) {
            // Username invalid
            return res.status(400).json({message: 'Неверное имя пользователя'});
        }
        if (!Crypto.compare(password, user.password)) {
            // Password invalid
            return res.status(400).json({message: 'Неверный пароль'});
        }

        await createToken(req, res, user.userId, saveMe ? MONTH*12 : null);

        res.sendStatus(204);
    } catch (err) {
        handleError(res, err);
    }
});