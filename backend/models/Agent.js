const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Warehouse = require("./Warehouse");

const Agent = sequelize.define("Agent", {
  name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false, unique: true },
  warehouse_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Warehouse, key: "id" },
  },
  max_hours: { type: DataTypes.INTEGER, defaultValue: 10 },
  max_distance: { type: DataTypes.INTEGER, defaultValue: 100 },
},
{
  timestamps: false,
});

module.exports = Agent;
