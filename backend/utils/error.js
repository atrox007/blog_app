export const errorHandler = (statusCode, message) => {
    const error = new Error();
    // @ts-ignore
    error.statusCode = statusCode;
    error.message = message;
    return error;
};