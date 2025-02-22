import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.static("public"));

app.use(
    express.json({
        limit: "16kb",
    })
);

app.use(
    express.urlencoded({
        limit: "16kb",
        extended: true,
    })
);

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
    })
);

app.use(cookieParser());

// importing routes
import userRouter from "../src/routes/user.route.js";
import customerRouter from "../src/routes/customer.route.js";

// declaring routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/customers", customerRouter);

export { app };
