import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS configuration - adjust for production
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        // Normalize origins by removing trailing slashes
        const normalizeOrigin = (url) => url ? url.replace(/\/+$/, '') : url;
        
        const allowedOrigins = process.env.NODE_ENV === 'production'
            ? [
                process.env.FRONTEND_URL,
                'https://login-verification-eight.vercel.app'
            ].filter(Boolean).map(normalizeOrigin)
            : ['http://localhost:5173'];
        
        const normalizedOrigin = normalizeOrigin(origin);
        
        if (allowedOrigins.includes(normalizedOrigin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());

import UserRoter from "./routes/User.route.js";
app.use("/api/user", UserRoter);

export default app;