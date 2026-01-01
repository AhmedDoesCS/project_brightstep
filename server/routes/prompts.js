import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/why", async (req, res) => {
    try {
        const [rows] = await db.execute(
            "SELECT id, prompt_text, difficulty_level FROM prompts WHERE prompt_type = ? ORDER BY RAND() LIMIT 1",
            ["WHY"]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: "No WHY prompts found" });
        }

        return res.json(rows[0]);

    } catch (err) {
        console.error(err);;
        res.status(500).json({ error: "Failed to fetch why prompt" });
    }
});

export default router;
