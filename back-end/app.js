import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyzeRoutes.js";

const app = express();

app.use(cors({
    origin: "*",
}));

app.use(express.json());
app.use("/api", analyzeRoutes);

app.use((error, req, res, next) => {
    if (!error) {
        return next();
    }

    return res.status(400).json({
        success: false,
        message: error.message || "Could not process the uploaded resume."
    });
});

export default app;
