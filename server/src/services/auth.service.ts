import { db } from "@database/database";
import { WEEK } from "@constants/time.constant";
import { NextFunction, Request, Response } from "express";

const defaultTokenLife = WEEK;
const tokenField = 'authToken';


export async function createToken(req: Request, res: Response, userId: string, maxAge?: number) {
    const tokenMaxAge = new Date(Date.now() + (maxAge || defaultTokenLife));

    const newToken = await db.Token.create({
        userId: userId,
        maxAge: tokenMaxAge,
        ipAddress: req.socket.remoteAddress,
        userAgent: req.headers['user-agent']
    });

    res.cookie(tokenField, newToken.token, {
        expires: tokenMaxAge,
        httpOnly: true,
        sameSite: true
    });
}

export async function authOnly(req: Request, res: Response, next: NextFunction) {
    const token = await db.Token.findOne({ token: req.cookies[tokenField] });
    
    if (!token) {
        res.status(401).json({message: 'Невалидный токен'});
    }
    else if (token.maxAge == null || new Date() < token.maxAge) {
        res.locals.user = {
            userId: token.userId
        };
        next();
    }
    else {
        await token.delete();
        res.status(401).json({message: 'Срок жизни токена истек'});
    }
}