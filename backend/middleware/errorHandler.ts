import { Request, Response, NextFunction } from 'express';
import { CustomError } from "./customError.js";

const errorHandlerMiddleware = (err: TypeError | CustomError, res: Response, req: Request, next: NextFunction) => {
    let customError = err;

    if (!(customError instanceof CustomError)) {
        customError = new CustomError(
            `Oh shit, we're screwed. Something is not right.`, 500);
    }
    return res.status((customError as CustomError).statusCode).send(customError);
};

export default errorHandlerMiddleware;