import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS configuration - adjust for production
const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? process.env.FRONTEND_URL
        : "http://localhost:5173", // Your frontend dev URL
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());

import UserRoter from "./routes/User.route.js";
app.use("/api/user", UserRoter);

export default app;