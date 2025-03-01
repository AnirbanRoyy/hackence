import "dotenv/config";
import { connectDb } from "./db/connectDb.js";
import { app } from "./app.js";
import serverless from "serverless-http";

// Optional: Cache the DB connection to avoid reconnecting on every request
let dbConnected = false;

async function ensureDbConnection() {
    if (!dbConnected) {
        try {
            await connectDb();
            dbConnected = true;
            console.log("Database connected successfully");
        } catch (error) {
            console.error(`Database connection error -> ${error}`);
            throw error; // Let Vercel handle the error response
        }
    }
}

// Middleware to ensure DB is connected before handling requests
app.use(async (req, res, next) => {
    await ensureDbConnection();
    next();
});

// Export the serverless handler
export const handler = serverless(app);
