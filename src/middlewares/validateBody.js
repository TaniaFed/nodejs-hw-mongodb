import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const validationErrors = err.details.map((detail) => ({
      field: detail.path.join('.'),
      message: detail.message,
    }));

    return next(
      createHttpError(400, {
        message: 'Validation Error',
        errors: validationErrors,
      }),
    );
  }
};
