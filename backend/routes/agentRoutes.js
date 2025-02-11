const express = require("express");
const router = express.Router();
const Agent = require("../models/Agent");

router.post("/add", async (req, res) => {
  try {
    const { name, phone, warehouse } = req.body;

    if (!name || !phone || !warehouse) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const agent = new Agent({ name, phone, warehouse });
    await agent.save();

    res.status(201).json({ message: "Agent added successfully!", agent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const agents = await Agent.find();
    res.json(agents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;