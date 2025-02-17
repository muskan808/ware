const Order = require("../models/Order");
const { assignOrdersToWarehouse } = require("../services/orderService");

const addOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json({ message: "Order added!", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const assignOrders = async (req, res) => {
  try {
    const { warehouse_id } = req.body;
    const result = await assignOrdersToWarehouse(warehouse_id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addOrder, getAllOrders, assignOrders };
