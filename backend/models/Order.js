const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Warehouse = require("./Warehouse");

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  latitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("PENDING", "ASSIGNED", "DELIVERED"),
    defaultValue: "PENDING",
  },
  agentId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  warehouseId: {
    type: DataTypes.INTEGER,
    references: {
      model: Warehouse,
      key: "id",
    },
    allowNull: false,
  },
});

module.exports = Order;
