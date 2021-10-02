import { Response } from "express";
import { Error as MongooseError } from "mongoose";

enum AppErrorCodes {
    UnknownError = 0,
    ValidationError = 1,
    NotUniqueFieldError = 2
}

interface AppError {
    code: AppErrorCodes,
    [key: string]: any
}

export function handleError(res: Response, error: any = {}): void {
    let result: AppError;
    if (error.name == 'MongoServerError') {
        result = handleMongoServerError(res, error);
    } 
    else if (error instanceof MongooseError) {
        result = handleMongooseError(res, error);
    }

    if (result) {
        res.json(result);
    }
    else {
        console.error('Unknown error', error);
        res.statusCode = 500;
        res.json( {code: AppErrorCodes.UnknownError, error} );
    }

}



function handleMongoServerError(res: Response, error: any): AppError {
    if (error.code === 11000) {
        res.statusCode = 400;
        const errors = [];
        for (let key in error.keyPattern) {
            errors.push({
                field: key,
                message: 'Не уникальное значение'
            });
        }
        return {code: AppErrorCodes.NotUniqueFieldError, errors};
    }
}



function handleMongooseError(res: Response, error: MongooseError): AppError {
    if (error instanceof MongooseError.ValidationError) {
        res.statusCode = 400;
        const errors = [];
        for (let key in error.errors) {
            const err = error.errors[key] as MongooseError.ValidatorError;
            errors.push({
                field: err.path,
                message: err.message
            });
        }
        return {code: AppErrorCodes.ValidationError, errors};
    }
}