const express = require("express");
const Agent = require("../models/Agent");
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const agent = await Agent.create(req.body);
    res.json({ message: "Agent added!", agent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const agents = await Agent.findAll();
  res.json(agents);
});

module.exports = router;
