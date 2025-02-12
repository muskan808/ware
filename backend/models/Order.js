const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Warehouse = require("./Warehouse");
const Agent = require("./Agent");

const Order = sequelize.define("Order", {
  customer_name: { type: DataTypes.STRING, allowNull: false },
  customer_address: { type: DataTypes.STRING, allowNull: false },
  latitude: { type: DataTypes.FLOAT, allowNull: false },
  longitude: { type: DataTypes.FLOAT, allowNull: false },
  status: {
    type: DataTypes.ENUM("PENDING", "ASSIGNED", "DELIVERED"),
    defaultValue: "PENDING",
  },
  agent_id: { type: DataTypes.INTEGER, allowNull: true, references: { model: Agent, key: "id" } },
  warehouse_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Warehouse, key: "id" } },
},
{
  timestamps: false,
});

module.exports = Order;
