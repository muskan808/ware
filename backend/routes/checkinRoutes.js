const express = require("express");
const AgentCheckin = require("../models/AgentCheckin");
const router = express.Router();

router.post("/checkin", async (req, res) => {
  try {
    const checkin = await AgentCheckin.create(req.body);
    res.json({ message: "Check-in recorded!", checkin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
