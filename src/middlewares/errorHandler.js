import HttpError from "http-errors";

export const errorHandler = (err, req, res, next) => {
    const status = err instanceof HttpError ? err.status : (err.status || 500);

    res.status(status).json({
        status,
        message: err.message || 'Something went wrong',
        ...(err.errors && { errors: err.errors }),
    });

};


