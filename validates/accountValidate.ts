import { NextFunction, Request, Response } from "express";
import Joi from "joi"
export const register = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    fullName: Joi.string().min(5).max(255).required()
      .messages({
        "string.empty": "fullName is blank!",
        "any.required": "fullName is required!",
        "string.min": "fullName must has 6 characters up!",
        "string.max": "fullName only has 255 characters!"
      }),
    email: Joi.string().email().required()
      .messages({
        "string.empty": "Email is blank!",
        "any.required": "Email is required!",
        "string.email": "Emall error!"
      }),
    password: Joi.string().min(6).required()
      .messages({
        "any.required": "password is required!",
        "string.empty": "password is blank!",
        "string.min": "password mus has 6 characters up!"
      }),
  })

  const { error } = schema.validate(req.body);

  if(error) {
    res.status(400).json({
      code: "error",
      message: error.details[0].message,
    });
    return;
  }

  next();
}