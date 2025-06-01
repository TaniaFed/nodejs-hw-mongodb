import Joi from "joi";

import { isValidObjectId } from "mongoose";

export const createContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        'string.base': 'Username should be a string',
        'string.min': 'Username should have at least {#limit} characters',
        'string.max': 'Username should have at most {#limit} characters',
        'any.required': 'Username is required',
      }),
    phoneNumber: Joi.string().min(12).max(13).required().messages({
        'string.max': 'Phone number should be {#limit} numbers and start with '+'',
        'any.required': 'Phone number is required',
      }),
    email: Joi.string().email().messages({
        'string.base': 'Email should be a string',
        'any.required': 'Email is required',
      }),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().valid('work', 'home', 'personal').required(),
    userId: Joi.string().custom((value, helper) => {
    if (value && !isValidObjectId(value)) {
      return helper.message('User id should be a valid Mongo id');
    }
    return true;
  }),
});

export const updateContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).messages({
        'string.base': 'Username should be a string',
        'string.min': 'Username should have at least {#limit} characters',
        'string.max': 'Username should have at most {#limit} characters',
      }),
    phoneNumber: Joi.string().min(12).max(13).messages({
        'string.max': 'Phone number should be {#limit} numbers and start with '+'',
      }),
    email: Joi.string().email().messages({
        'string.base': 'Email should be a string',
      }),
    isFavourite: Joi.boolean(),
    contactType: Joi.string().valid('work', 'home', 'personal'),
    userId: Joi.string().custom((value, helper) => {
      if (value && !isValidObjectId(value)) {
        return helper.message('User id should be a valid Mongo id');
      }
      return true;
    }),
});
