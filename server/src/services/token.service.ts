import { Request } from "express";
import { db } from "@database/database";


export function createToken(req: Request, userId: string, maxAge: number) {
    const tokenMaxAge = new Date(new Date().getTime() + maxAge);
    return new db.Token({
        userId: userId,
        maxAge: tokenMaxAge,
        ipAddress: req.socket.remoteAddress?.replace('::ffff:', ''),
        userAgent: req.headers['user-agent']
    })
}