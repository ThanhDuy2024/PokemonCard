import express from "express";
import "dotenv/config"
import cookieParser from "cookie-parser";
import adminRoute from "./routes/admin/index.route";
import { databaseConnect } from "./configs/databaseConfig";
const app = express();

const port = process.env.PORT;

app.use(cookieParser());
app.use(express.json());

databaseConnect();

app.use("/api/admin", adminRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})