import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { sessionId, promptId, responseText } = req.body;
        if (!sessionId || !promptId || typeof responseText !== "string") {
            return res.status(400).json({ error: "session_id, prompt_id, and response_text are required" });
        }

        const responded = responseText.trim() > 0;


        const [result] = await db.execute(
            "INSERT INTO responses (session_id, prompt_id, response_text, responded) VALUES (?, ?, ?, ?)",
            [sessionId, promptId, responseText, responded]
        );


        res.status(201).json({ response_id: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to save response" });
    }
});

export default router;