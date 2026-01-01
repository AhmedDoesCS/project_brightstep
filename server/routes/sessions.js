import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.post("/start", async (req, res) => {
    try {
        const userId = 1;
        const activityId = 1;

        const [result] = await db.execute(
            "INSERT INTO sessions (user_id, activity_id) VALUES (?, ?)",
            [userId, activityId]
        );

        res.status(201).json({ session_id: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to start session" });
    }
});

router.post("/:id/end", async (req, res) => {
    try {
        const { id } = req.params;

        if (Number.isNaN(Number(id))) {
            return res.status(400).json({ error: "Session id must be a number" });
        }

        const [result] = await db.execute(
            "UPDATE sessions SET ended_at = NOW() WHERE id = ? AND ended_at IS NULL",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Session not found or already ended" });
        }

        return res.json({ session_id: Number(id), ended: true });



    } catch (err) {
        console.error(err);
    return res.status(500).json({ error: "Failed to end session" });
    }
});

export default router;
