const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Warehouse = require("./Warehouse");

const Agent = sequelize.define(
  "Agent",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false, unique: true },
    warehouse_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Warehouse, key: "id" },
    },
    total_hours_worked: { type: DataTypes.DECIMAL(5, 2), defaultValue: 0 },
    total_distance: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0 },
    checked_in: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    timestamps: false,
  }
);


module.exports = Agent;
