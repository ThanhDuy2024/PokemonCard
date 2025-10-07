import { Router } from "express";
import * as adminAccountController from "../../controllers/admin/adminAccount.controller";
import * as validate from "../../validates/accountValidate"
const route = Router();

route.post("/register", validate.register, adminAccountController.register);

route.get("/create", adminAccountController.createAdminAccount);

export default route;