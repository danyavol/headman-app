import { SchemaValidation } from '@services/schema-validation.service';
import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

export interface ILessonType {
    lessonTypeId: string,
    shortName: string,
    name: string,
    sortIndex: number
}

export const LessonTypeSchema = new Schema<ILessonType>({
    lessonTypeId: {
        type: String,
        default: uuid,
        unique: true
    },
    shortName: {
        type: String,
        maxlength: SchemaValidation.maxLength(4),
        required: SchemaValidation.required()
    },
    name: {
        type: String,
        maxlength: SchemaValidation.maxLength(50),
        required: SchemaValidation.required()
    },
    sortIndex: {
        type: Number,
        required: SchemaValidation.required()
    }
});