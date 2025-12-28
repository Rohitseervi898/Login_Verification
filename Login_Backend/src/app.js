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
import ApiError from "./utils/ApiError.js";

app.use("/api/user", UserRoter);

// Error handling middleware
app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.error
        });
    }
    
    // Handle CORS errors
    if (err.message === 'Not allowed by CORS') {
        return res.status(403).json({
            success: false,
            message: 'CORS policy: Origin not allowed'
        });
    }
    
    // Handle other errors
    console.error("Error:", err);
    return res.status(500).json({
        success: false,
        message: err.message || "Internal server error",
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// 404 handler
app.use((req, res) => {
    return res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`
    });
});

export default app;