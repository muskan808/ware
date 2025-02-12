const express = require("express");
const Order = require("../models/Order");
const Warehouse = require("../models/Warehouse");
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json({ message: "Order added!", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
});
router.post("/assign", async (req, res) => {
  try {
    const { warehouse_id } = req.body;
    
    if (!warehouse_id) {
      return res.status(400).json({ error: "Warehouse ID required" });
    }

    const warehouse = await Warehouse.findByPk(warehouse_id);
    if (!warehouse) {
      return res.status(404).json({ error: "Warehouse not found" });
    }

    const orders = await Order.findAll({ where: { warehouse_id: 1 } });

    if (orders.length === 0) {
      return res.status(400).json({ error: "No unassigned orders available" });
    }

    await Order.update({ warehouse_id }, { where: { warehouse_id: null } });

    res.json({ message: "Orders assigned successfully!", assignedOrders: orders.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
