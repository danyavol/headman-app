import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

export interface IToken {
    token: string,
    userId: string,
    createdAt: Date,
    maxAge: Date,
    userAgent: string,
    ipAddress: string
}

export const TokenSchema = new Schema<IToken>({
    token: {
        type: String,
        default: uuid,
        unique: true
    },
    userId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    },
    maxAge: { type: Date },
    userAgent: { type: String },
    ipAddress: { type: String }
});