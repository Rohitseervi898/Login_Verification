import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
});

// Export the app for Vercel
export default app;