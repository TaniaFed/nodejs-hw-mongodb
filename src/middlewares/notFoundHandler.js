import HttpError from "http-errors";

export const notFoundHandler = (req, res, next) => {
    next(HttpError(404, "Route not found"));
};
