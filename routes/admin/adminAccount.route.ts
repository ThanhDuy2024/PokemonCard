import { Router } from "express";
import * as adminAccountController from "../../controllers/admin/adminAccount.controller";
const route = Router();

route.get("/create", adminAccountController.createAdminAccount);

export default route;