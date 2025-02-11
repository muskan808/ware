const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
router.post("/add", async (req, res) => {
  try {
      const { warehouse, address, latitude, longitude } = req.body;
      const order = new Order({ warehouse, address, latitude, longitude });
      await order.save();
      res.json({ message: "Order added!", order });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
