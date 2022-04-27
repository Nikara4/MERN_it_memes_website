"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomError = exports.CustomError = void 0;
class CustomError {
    constructor(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.CustomError = CustomError;
const createCustomError = (msg, statusCode) => {
    return new CustomError(msg, statusCode);
};
exports.createCustomError = createCustomError;
