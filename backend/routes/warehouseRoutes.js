const express = require("express");
const Warehouse = require("../models/Warehouse");
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const warehouse = await Warehouse.create(req.body);
    res.json({ message: "Warehouse added!", warehouse });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const warehouses = await Warehouse.findAll();
  res.json(warehouses);
});

module.exports = router;
