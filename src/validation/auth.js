import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email should be a string',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(4).required().messages({
    'string.base': 'Password should be valid',
    'string.min': 'Password should have at least {#limit} characters',
    'any.required': 'Password is required',
  }),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'Email should be a string',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(4).required().messages({
    'string.base': 'Password should be valid',
    'string.min': 'Password should have at least {#limit} characters',
    'any.required': 'Password is required',
  }),
});

export const sendResetEmailSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'Email should be a string',
    'string.email': 'Email must be a valid email address',
    'string.empty': 'Email cannot be empty',
    'any.required': 'Email is required',
  }),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().min(4).required().messages({
    'string.base': 'Password should be valid',
    'string.min': 'Password should have at least {#limit} characters',
    'any.required': 'Password is required',
  }),
  token: Joi.string().required().messages({
    'string.base': 'Token should be valid',
    'any.required': 'Token is required',
  }),
});
