const Order = require("../models/Order");
const Agent = require("../models/Agent");
const { Op } = require("sequelize");

const assignOrdersToAgents = async (warehouse_id) => {
  try {
    const orders = await Order.findAll({
      where: { warehouse_id, status: "PENDING" },
    });

    if (orders.length === 0) {
      return { message: "No pending orders for this warehouse" };
    }

    const agents = await Agent.findAll({
      where: { warehouse_id },
      order: [["checked_in", "ASC"]],
    });

    if (agents.length === 0) {
      return { message: "No agents available at this warehouse" };
    }

    let agentIndex = 0;
    let totalDistance = 0;
    const MAX_HOURS = 10;
    const MAX_DISTANCE = 100; 
    const SPEED_KM_PER_MIN = 1 / 5; 

    for (let order of orders) {
      let agent = agents[agentIndex];

      let distance = Math.random() * 10; 
      totalDistance += distance;

      let travelTime = (totalDistance / SPEED_KM_PER_MIN) / 60; 

      if (travelTime > MAX_HOURS || totalDistance > MAX_DISTANCE) {
        agentIndex++;
        if (agentIndex >= agents.length) {
          break; 
        }
        agent = agents[agentIndex];
        totalDistance = 0;
      }

      await order.update({ agent_id: agent.id, status: "ASSIGNED" });
    }

    return { message: "Orders assigned to agents successfully!" };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { assignOrdersToAgents };
