const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/warehouses", require("./routes/warehouseRoutes"));
app.use("/agents", require("./routes/agentRoutes"));
app.use("/agent", require("./routes/agents"));
app.use("/orders", require("./routes/orderRoutes"));
app.use("/checkins", require("./routes/checkinRoutes"));
app.use("/payments", require("./routes/paymentRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));
