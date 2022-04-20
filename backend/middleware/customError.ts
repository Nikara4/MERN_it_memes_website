export class CustomError {
    message!: string | any;
    statusCode!: number;

    constructor(message: string | any, statusCode: number) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

export const createCustomError = (msg: string | any, statusCode: number) => {
    return new CustomError(msg, statusCode);
}