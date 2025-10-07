import { Request, Response } from "express";
import { AdminAccount } from "../../models/adminAccount";
import bcrypt from "bcryptjs";
export const register = async (req: Request, res: Response) => {
  try {
    const checkAccount = await AdminAccount.findOne({
      email: req.body.email,
      deleted: false
    });

    if(checkAccount) {
      res.status(400).json({
        code: "error",
        message: "Email has been registered!"
      });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    req.body.password = hash;
    
    await AdminAccount.create(req.body);
    
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