import mongoose, { CallbackWithoutResult, ConnectOptions } from 'mongoose';
import { Model } from 'mongoose';
import { UserSchema, IUser } from './schemas/user.schema';


export interface IDatabase {
    User: Model<IUser>
}

export const db: IDatabase = {
    User: mongoose.model<IUser>('User', UserSchema)
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