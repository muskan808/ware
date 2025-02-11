const Agent = require("../models/Agent");
const Order = require("../models/Order");
const Allocation = require("../models/Allocation");

const allocateOrders = async (req, res) => {
    try {
        // Get all unallocated orders
        const orders = await Order.findAll({ where: { status: "pending" } });

        // Get all available agents
        const agents = await Agent.findAll();

        let orderIndex = 0;

        // Assign orders to agents based on their capacity
        for (let agent of agents) {
            let assignedOrders = 0;
            let totalDistance = 0;

            while (assignedOrders < 50 && orderIndex < orders.length) {
                let order = orders[orderIndex];

                // Assuming each km takes 5 mins
                let distance = 5; // Replace this with actual distance logic

                if (totalDistance + distance <= agent.max_distance) {
                    await Allocation.create({ agent_id: agent.id, order_id: order.id });
                    totalDistance += distance;
                    assignedOrders++;
                    orderIndex++;
                } else {
                    break;
                }
            }
        }

        res.json({ message: "Orders allocated successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { allocateOrders };
