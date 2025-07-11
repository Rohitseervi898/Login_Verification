import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app=express();

app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(express.json({limit: "16kb"}))

import UserRoter from "./routes/User.route.js";
app.use("/api/user", UserRoter);

export default app;