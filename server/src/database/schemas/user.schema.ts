import { PASSWORD_REGEXP, USERNAME_REGEXP } from '@constants/regexp.constant';
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
        minlength: SchemaValidation.minLength(4),
        maxlength: SchemaValidation.maxLength(16),
        match: [USERNAME_REGEXP, 'Маленькие латинские буквы или цифры, первый символ не цифра'],
        unique: true,
        required: true
    },
    password: { 
        type: String, 
        minlength: SchemaValidation.minLength(6),
        maxlength: SchemaValidation.maxLength(50),
        match: [PASSWORD_REGEXP, 'Минимум 1 большая буква, маленькая и цифра'],
        required: true 
    },
});