const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  warehouse: { type: mongoose.Schema.Types.ObjectId, ref: "Warehouse" }, // Link to warehouse
  maxHours: { type: Number, default: 10 },
  maxDistance: { type: Number, default: 100 },
});

module.exports = mongoose.model("Agent", AgentSchema);
