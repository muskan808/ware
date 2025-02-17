const express = require("express");
const { createWarehouse, fetchWarehouses } = require("../controllers/warehouseController");

const router = express.Router();

router.post("/add", createWarehouse);
router.get("/", fetchWarehouses);

module.exports = router;
