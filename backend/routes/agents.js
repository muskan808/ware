const express = require("express");
const router = express.Router();
const Agent = require("../models/Agent");
const AgentCheckin = require("../models/AgentCheckin");

router.post("/check-in", async (req, res) => {
  try {
    const { agentId, warehouseId } = req.body;
    const agent = await Agent.findByPk(agentId);

    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }

    // Update agent's checked_in status
    agent.checked_in = true;
    await agent.save();

    // Insert record into agents_checkin table
    await AgentCheckin.create({
      agent_id: agentId,
      warehouse_id: warehouseId,
      checkin_time: new Date(),
    });

    res.json({ message: "Checked in successfully", agent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
