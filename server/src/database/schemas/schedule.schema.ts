import { SchemaValidation } from '@services/schema-validation.service';
import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';

export interface ISchedule {
    weekId: string,
    semesterId: string,
    lessons: ILesson[]
}

export interface ILesson {
    lessonId: string,
    lessonNameId: string,
    lessonTypeId: string,
    lessonTimeId: string,
    date: Date,
    absences: IAbsence[]
}

export interface IAbsence {
    studentId: string,
    absenceCode: AbsenceCode
}

export enum AbsenceCode {
    NoInfo = 0,
    NotAbsent = 1,
    AbsentWithReason = 2,
    Absent = 3
}

export const ScheduleSchema = new Schema<ISchedule>({
    weekId: {
        type: String,
        default: uuid,
        unique: true
    },
    semesterId: {
        type: String,
        required: SchemaValidation.required()
    },
    lessons: [{
        lessonId: {
            type: String,
            default: uuid,
            required: SchemaValidation.required()
        },
        lessonNameId: {
            type: String,
            required: SchemaValidation.required()
        },
        lessonTypeId: {
            type: String,
            required: SchemaValidation.required()
        },
        lessonTimeId: {
            type: String,
            required: SchemaValidation.required()
        },
        date: {
            type: Date,
            required: SchemaValidation.required()
        },
        absences: [{
            studentId: {
                type: String,
                required: SchemaValidation.required()
            },
            absenceCode: {
                type: Number,
                default: AbsenceCode.NoInfo,
                required: SchemaValidation.required()
            }
        }]
    }]
});