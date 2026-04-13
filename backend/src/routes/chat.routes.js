import { Router } from "express";
import { queryRagService } from "../services/pythonClient.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question?.trim()) {
      return res.status(400).json({ error: "Question is required." });
    }

    const result = await queryRagService({ question });
    return res.json(result);
  } catch (error) {
    return res.status(502).json({
      error: "FastAPI service is unavailable.",
      details: error.message
    });
  }
});

export default router;
