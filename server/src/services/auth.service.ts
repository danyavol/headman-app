import { NextFunction, Request, Response } from "express";
import { db } from "@database/database";


export function createToken(req: Request, userId: string, maxAge: number) {
    const tokenMaxAge = new Date(Date.now() + maxAge);
    return new db.Token({
        userId: userId,
        maxAge: tokenMaxAge,
        ipAddress: req.socket.remoteAddress?.replace('::ffff:', ''),
        userAgent: req.headers['user-agent']
    })
}

export async function authOnly(req: Request, res: Response, next: NextFunction) {
    const token = await db.Token.findOne({ token: req.headers['authorization'] });
    
    if (!token) {
        res.status(401).json({message: 'Invalid token'});
    }
    else if (token.maxAge == null || new Date() < token.maxAge) {
        res.locals.user = {
            userId: token.userId
        };
        next();
    }
    else {
        await token.delete();
        res.status(401).json({message: 'Token has expired'});
    }
}