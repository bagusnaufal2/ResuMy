import express from "express";
import analyzeResume from "../controllers/analyzeController.js";

const router = express.Router();

router.get("/health", (req, res) => {
    res.json({
        success: true,
        maessage: "Server is running"
    });
});

router.post("/analyze", analyzeResume);

export default router;
