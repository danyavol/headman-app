import { Router } from "express";
import { WEEK } from "@constants/time.constant";
import { db } from "@database/database";
import { Crypto } from "@services/crypto.service";
import { handleError } from "@services/error-handle.service";
import { createToken } from "@services/auth.service";

const auth = Router();
export default auth;

const defaultTokenLife = WEEK;


auth.post('/register', async (req, res) => {
    const { password, username } = req.body;
    try {
        const newUser = new db.User({ password, username });
        await newUser.validate();
        newUser.password = Crypto.encrypt(newUser.password);
        await newUser.save({ validateBeforeSave: false });

        const token = createToken(req, newUser.userId, defaultTokenLife);
        await token.save();

        res.json({token: token.token});
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

        const token = createToken(req, user.userId, saveMe ? null : defaultTokenLife);
        await token.save();

        res.json({token: token.token});
    } catch (err) {
        handleError(res, err);
    }
});