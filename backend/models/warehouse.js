const mongoose = require('mongoose');

const WarehouseSchema = new mongoose.Schema({
    city: String,
    warehouseId: String
});

module.exports = mongoose.model('Warehouse', WarehouseSchema);
