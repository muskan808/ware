const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Agent = require("./Agent");

const AgentPayment = sequelize.define("Agent_Payment", {
  agent_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Agent, key: "id" } },
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  total_orders: { type: DataTypes.INTEGER, defaultValue: 0 },
  total_earnings: { type: DataTypes.DECIMAL(10,2), defaultValue: 500 },
},
{
  timestamps: false,
});

module.exports = AgentPayment;
