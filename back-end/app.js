import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyzeRoutes.js";

const app = express();

app.use(cors({
    origin: "*",
}));

app.use(express.json());
app.use("/api", analyzeRoutes);

export default app;
