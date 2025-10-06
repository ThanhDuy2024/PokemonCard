import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  try {
    res.json({
      code: "success",
      message: "register success"
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "error"
    })
  }
}


export const createAdminAccount = async (req: Request, res: Response) => {
  res.json({
    code: "success",
    message: "Ok"
  })
}