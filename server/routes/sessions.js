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

// router.post("/:id/end", async (req, res) => {
//     try {


//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Failed to end session" });
//     }
// });

export default router;
