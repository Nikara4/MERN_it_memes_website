export class CustomError {
    message!: string | undefined;
    statusCode!: number;

    constructor(message: string | undefined, statusCode: number) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

export const createCustomError = (msg: string | undefined, statusCode: number) => {
    return new CustomError(msg, statusCode);
}