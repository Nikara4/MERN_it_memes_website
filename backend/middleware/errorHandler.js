import { CustomError } from "./customError.js";
const errorHandlerMiddleware = (err, res, req, next) => {
    let customError = err;
    if (!(customError instanceof CustomError)) {
        customError = new CustomError(`Oh shit, we're screwed. Something is not right.`, 500);
    }
    return res.status(customError.statusCode).send(customError);
};
export default errorHandlerMiddleware;
