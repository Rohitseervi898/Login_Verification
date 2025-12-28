import connectDB from "./db/index.js";
import app from "./app.js";

// Connect to database on first invocation (for serverless)
let isConnected = false;

const connectDatabase = async () => {
    if (isConnected) {
        return;
    }
    try {
        await connectDB();
        isConnected = true;
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        isConnected = false;
        throw error;
    }
};

// Serverless function handler for Vercel
const handler = async (req, res) => {
    try {
        await connectDatabase();
    } catch (error) {
        console.error("Database connection error:", error);
        return res.status(500).json({ 
            success: false, 
            message: "Database connection failed",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
    return app(req, res);
};

// For local development, start the server
if (!process.env.VERCEL && process.env.NODE_ENV !== 'production') {
    connectDB()
    .then(() => {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.error("Failed to connect to the database:", error);
        process.exit(1);
    });
}

// Export handler for Vercel (always export, but only use in serverless)
export default handler;