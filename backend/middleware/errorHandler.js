"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customError_js_1 = require("./customError.js");
const errorHandlerMiddleware = (err, res, req, next) => {
    let customError = err;
    if (!(customError instanceof customError_js_1.CustomError)) {
        customError = new customError_js_1.CustomError(`Oh shit, we're screwed. Something is not right.`, 500);
    }
    return res.status(customError.statusCode).send(customError);
};
exports.default = errorHandlerMiddleware;
