import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { SchemaValidation } from '../../services/schema-validation.service';

export interface IUser {
    userId: string,
    username: string,
    password: string
}

export const UserSchema = new Schema<IUser>({
    userId: {
        type: String,
        default: uuid,
        unique: true
    },
    username: { 
        type: String,
        minlength: SchemaValidation.minLength(5),
        maxlength: SchemaValidation.maxLength(16),
        match: [/^[a-zA-Z0-9._]+$/, 'Допустимые символы: a-z A-Z 0-9 . _'],
        unique: true,
        required: true
    },
    password: { 
        type: String, 
        minlength: SchemaValidation.minLength(6),
        maxlength: SchemaValidation.maxLength(24),
        match: [/[a-zA-Z0-9._]/, 'Допустимые символы: a-z A-Z 0-9 . и _'],
        required: true 
    },
});