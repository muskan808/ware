const express = require('express');
const router = express.Router();
const Agent = require('../models/Agent');

router.post('/check-in', async (req, res) => {
    const { agentId } = req.body;
    const agent = await Agent.findById(agentId);

    if (agent) {
        agent.checkedIn = true;
        await agent.save();
        res.json({ message: 'Checked in' });
    } else {
        res.status(404).json({ message: 'Agent not found' });
    }
});

module.exports = router;
