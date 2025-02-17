const { addWarehouse, getAllWarehouses } = require("../services/warehouseService");

const createWarehouse = async (req, res) => {
  try {
    const warehouse = await addWarehouse(req.body);
    res.json({ message: "Warehouse added!", warehouse });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const fetchWarehouses = async (req, res) => {
  try {
    const warehouses = await getAllWarehouses();
    res.json(warehouses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createWarehouse, fetchWarehouses };
