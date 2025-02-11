const express = require("express");
const router = express.Router();
const Warehouse = require("../models/Warehouse");

router.post("/add", async (req, res) => {
    try {
        const { name, location } = req.body;
        const warehouse = new Warehouse({ name, location });
        await warehouse.save();
        res.json({ message: "Warehouse added!", warehouse });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    const warehouses = await Warehouse.find();
    res.json(warehouses);
});

module.exports = router;
