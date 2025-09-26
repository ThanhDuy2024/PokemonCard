import { Request, Response } from "express";

export const createAdminAccount = async (req: Request, res: Response) => {
  res.json({
    code: "success",
    message: "Ok"
  })
}