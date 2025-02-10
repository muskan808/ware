const express = require("express");
const connectDB = require("./config/db"); // Ensure database connection
const agentRoutes = require("./routes/agentRoutes"); // Ensure correct import
const orderRoutes = require("./routes/orderRoutes");

const app = express();
connectDB();

app.use(express.json()); // Middleware to parse JSON
app.use("/api/agents", agentRoutes); // This should be correct
app.use("/api/orders", orderRoutes); // This should be correct

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
