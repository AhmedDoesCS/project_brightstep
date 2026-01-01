import express from "express";
import sessionsRouter from "./routes/sessions.js";
import promptsRouter from "./routes/prompts.js";


const app = express();

app.use(express.json());

app.use("/sessions", sessionsRouter);
app.use("/prompts", promptsRouter);

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

app.get("/", (req, res) => res.send("OK"));
