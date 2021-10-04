import mongoose, { CallbackWithoutResult, ConnectOptions, Model } from 'mongoose';
import { GroupSchema, IGroup } from './schemas/group.schema';
import { ILessonType, LessonTypeSchema } from './schemas/lesson-type.schema';
import { ISchedule, ScheduleSchema } from './schemas/schedule.schema';
import { ISemester, SemesterSchema } from './schemas/semester.schema';
import { IToken, TokenSchema } from './schemas/token.schema';
import { IUser, UserSchema } from './schemas/user.schema';


export interface IDatabase {
    User: Model<IUser>,
    Token: Model<IToken>,
    Group: Model<IGroup>,
    Semester: Model<ISemester>,
    Schedule: Model<ISchedule>,
    LessonType: Model<ILessonType>,
}

export const db: IDatabase = {
    User: mongoose.model<IUser>('User', UserSchema),
    Token: mongoose.model<IToken>('Token', TokenSchema),
    Group: mongoose.model<IGroup>('Group', GroupSchema),
    Semester: mongoose.model<ISemester>('Semester', SemesterSchema),
    Schedule: mongoose.model<ISchedule>('Schedule', ScheduleSchema),
    LessonType: mongoose.model<ILessonType>('LessonType', LessonTypeSchema),
};


const connectOptions: ConnectOptions = {};
export function connectDatabase(callback: CallbackWithoutResult): void {
    if (!mongoose.connection.readyState)
        mongoose.connect(process.env.DB_URL, connectOptions, callback);
}


// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

function gracefulExit() {
    mongoose.connection.close(() => {
        console.log('Database connection was closed before app termination');
        process.exit(0);
    });
}