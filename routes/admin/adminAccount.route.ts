import { Router } from "express";
import * as adminAccountController from "../../controllers/admin/adminAccount.controller";
const route = Router();

route.post("/register", adminAccountController.register);

route.get("/create", adminAccountController.createAdminAccount);

export default route;