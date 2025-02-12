const express = require("express");
const AgentPayment = require("../models/AgentPayment");
const router = express.Router();

router.get("/:agent_id", async (req, res) => {
  const payments = await AgentPayment.findAll({ where: { agent_id: req.params.agent_id } });
  res.json(payments);
});

module.exports = router;
