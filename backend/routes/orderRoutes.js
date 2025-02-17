const express = require("express");
const { addOrder, getAllOrders, assignOrders } = require("../controllers/orderController");

const router = express.Router();

router.post("/add", addOrder);
router.get("/", getAllOrders);
router.post("/assign", assignOrders);

module.exports = router;
