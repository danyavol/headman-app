import { SchemaValidation } from '@services/schema-validation.service';
import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

export interface ISemester {
    semesterId: string,
    groupId: string,
    name: string,
    students: IStudent[],
    lessonNames: ILessonName[],
    lessonTime: ILessonTime[]
}

export interface IStudent {
    studentId: string,
    firstName: string,
    lastName: string,
    patronymic?: string
}

export interface ILessonName {
    lessonNameId: string,
    shortName: string,
    name?: string,
    teachers?: string[]
}

export interface ILessonTime {
    lessonTimeId: string,
    start: string,
    end: string
}

export const SemesterSchema = new Schema<ISemester>({
    semesterId: {
        type: String,
        default: uuid,
        unique: true
    },
    groupId: {
        type: String,
        required: SchemaValidation.required()
    },
    name: {
        type: String,
        maxlength: SchemaValidation.maxLength(50),
        required: SchemaValidation.required()
    },
    students: [{
        studentId: {
            type: String,
            default: uuid,
            required: SchemaValidation.required()
        },
        firstName: {
            type: String,
            maxlength: SchemaValidation.maxLength(50),
            required: SchemaValidation.required()
        },
        lastName: {
            type: String,
            maxlength: SchemaValidation.maxLength(50),
            required: SchemaValidation.required()
        },
        patronymic: {
            type: String,
            maxlength: SchemaValidation.maxLength(50)
        }
    }],
    lessonNames: [{
        lessonNameId: {
            type: String,
            default: uuid,
            unique: true
        },
        shortName: {
            type: String,
            maxlength: SchemaValidation.maxLength(12),
            required: SchemaValidation.required()
        },
        name: {
            type: String,
            maxlength: SchemaValidation.maxLength(128)
        },
        teachers: [{
            type: String,
            maxlength: SchemaValidation.maxLength(128)
        }]
    }],
    lessonTime: [{
        lessonTimeId: {
            type: String,
            default: uuid,
            unique: true
        },
        start: {
            type: String,
            match: SchemaValidation.time(),
            required: SchemaValidation.required()
        },
        end: {
            type: String,
            match: SchemaValidation.time(),
            require: SchemaValidation.required()
        }
    }]
});