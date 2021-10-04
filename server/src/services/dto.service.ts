import { IGroup } from "@database/schemas/group.schema";
import { ILessonType } from "@database/schemas/lesson-type.schema";
import { ISchedule } from "@database/schemas/schedule.schema";
import { ISemester } from "@database/schemas/semester.schema";
import { IUser } from "@database/schemas/user.schema";

export const DTO = {
    user(d: IUser) {
        return {
            userId: d.userId,
            username: d.username
        };
    },
    group(d: IGroup) {
        return {
            groupId: d.groupId,
            name: d.name,
            members: d.members
        }
    },
    semester(d: ISemester) {
        return {
            semesterId: d.semesterId,
            groupId: d.groupId,
            name: d.name,
            lessonNames: d.lessonNames,
            lessonTime: d.lessonTime,
            students: d.students
        }
    },
    lessonType(d: ILessonType) {
        return {
            lessonTypeId: d.lessonTypeId,
            shortName: d.shortName,
            name: d.name,
            sortIndex: d.sortIndex
        }
    },
    schedule(d: ISchedule) {
        return {
            weekId: d.weekId,
            semesterId: d.semesterId,
            lessons: d.lessons
        }
    }
};