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
        required: true
    },
    lessons: [{
        lessonId: {
            type: String,
            default: uuid,
            required: true
        },
        lessonNameId: {
            type: String,
            required: true
        },
        lessonTypeId: {
            type: String,
            required: true
        },
        lessonTimeId: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        absences: [{
            studentId: {
                type: String,
                required: true
            },
            absenceCode: {
                type: Number,
                default: AbsenceCode.NoInfo,
                required: true
            }
        }]
    }]
});