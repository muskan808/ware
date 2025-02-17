const Warehouse = require("../models/Warehouse");

const addWarehouse = async (warehouseData) => {
  const warehouse = await Warehouse.create(warehouseData);
  return warehouse;
};

const getAllWarehouses = async () => {
  return await Warehouse.findAll();
};

module.exports = { addWarehouse, getAllWarehouses };
