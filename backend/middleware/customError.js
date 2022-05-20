export class CustomError {
    constructor(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
export const createCustomError = (msg, statusCode) => {
    return new CustomError(msg, statusCode);
};
