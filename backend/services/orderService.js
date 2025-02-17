const Order = require("../models/Order");
const Warehouse = require("../models/Warehouse");

const assignOrdersToWarehouse = async (warehouseId) => {
  if (!warehouseId) {
    throw new Error("Warehouse ID required");
  }

  const warehouse = await Warehouse.findByPk(warehouseId);
  if (!warehouse) {
    throw new Error("Warehouse not found");
  }

  // Find unassigned orders
  const orders = await Order.findAll({ where: { warehouse_id: null } });
  if (orders.length === 0) {
    throw new Error("No unassigned orders available");
  }

  // Assign orders to the warehouse
  await Order.update({ warehouse_id: warehouseId }, { where: { warehouse_id: null } });

  return { message: "Orders assigned successfully!", assignedOrders: orders.length };
};

module.exports = { assignOrdersToWarehouse };
