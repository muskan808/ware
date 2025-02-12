const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Agent = require("./Agent");

const AgentCheckin = sequelize.define("Agent_Checkin", {
  agent_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Agent, key: "id" } },
  warehouse_id: { type: DataTypes.INTEGER, allowNull: false },
  checkin_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
},
{
  timestamps: false,
});

module.exports = AgentCheckin;
