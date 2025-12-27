import connectDB from "./db/index.js";
import app from "./app.js";

// Connect to database
// In serverless environments (Vercel), Mongoose automatically caches connections
// This will connect on first invocation and reuse the connection for subsequent calls
connectDB()
.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.error("Failed to connect to the database:", error);
    // Don't exit process in serverless - errors will be handled by Vercel
    // process.exit(1) would kill the serverless function container
});

// Export the app for Vercel
export default app;