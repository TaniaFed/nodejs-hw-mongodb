import HttpError from "http-errors";

export const errorHandler = (err, req, res, next) => {
    const status = err instanceof HttpError ? err.status : (err.status || 500);

    // if (err instanceof HttpError) {
    //     res.status(err.status).json({
    //         status: err.status,
    //         message: err.name,
    //         data: err,
    //     });
    //     return;
    // }

    res.status(status).json({
        status,
        message: err.message || 'Something went wrong',
        data: err.data || err.message,
    });

    // res.status(500).json({
    //     status: 500,
    //     message: 'Something went wrong',
    //     data: err.message,
    //   });

};


