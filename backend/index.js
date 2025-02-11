const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Ensure JSON parsing is enabled

app.get("/", (req, res) => {
  res.send("API is working!");
});

app.use("/api/agents", require("./routes/agentRoutes")); // Ensure correct path
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/warehouses", require("./routes/warehouseRoutes"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
