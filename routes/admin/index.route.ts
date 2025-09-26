import { Router } from "express";
import adminAccountRoute from "./adminAccount.route"
const route = Router();

route.use("/account", adminAccountRoute);

export default route;