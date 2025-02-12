import React, { useEffect, useState } from "react";
import { getWarehouses, getAgents, getOrders, assignOrders } from "./api";

function App() {
    const [warehouses, setWarehouses] = useState([]);
    const [agents, setAgents] = useState([]);
    const [orders, setOrders] = useState([]);
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);

    useEffect(() => {
        // Fetch all data when the component loads
        getWarehouses().then((res) => {
            let fetchedWarehouses = res.data || [];

            // Ensure warehouses 1 to 4 are included
            for (let i = 1; i <= 4; i++) {
                if (!fetchedWarehouses.some((wh) => wh.id === i)) {
                    fetchedWarehouses.push({ id: i, name: `Warehouse ${i}`, location: "N/A" });
                }
            }

            setWarehouses(fetchedWarehouses);
        });

        getAgents().then((res) => setAgents(res.data));
        getOrders().then((res) => setOrders(res.data));
    }, []);

    const handleAssignOrders = async () => {
        if (!selectedWarehouse) {
            alert("Please select a warehouse!");
            return;
        }

        try {
            await assignOrders(selectedWarehouse);
            alert("Orders assigned successfully!");
        } catch (error) {
            console.error("Error assigning orders:", error);
            alert("Failed to assign orders.");
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Delivery Management System</h1>

            {/* Warehouses Section */}
            <h2>Warehouses</h2>
            <select
                onChange={(e) => setSelectedWarehouse(e.target.value)}
                value={selectedWarehouse || ""}
            >
                <option value="" disabled>Select a Warehouse</option>
                {warehouses.map((warehouse) => (
                    <option key={warehouse.id} value={warehouse.id}>
                        {warehouse.name} - {warehouse.location}
                    </option>
                ))}
            </select>

            {/* Assign Orders Button */}
            <button onClick={handleAssignOrders} style={{ marginLeft: "10px" }}>
                Assign Orders
            </button>

            {/* Orders Section */}
            <h2>Orders</h2>
            <table border="1" cellPadding="5" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customerName}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Agents Section */}
            <h2>Agents</h2>
            <table border="1" cellPadding="5" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Agent ID</th>
                        <th>Name</th>
                        <th>Checked In</th>
                    </tr>
                </thead>
                <tbody>
                    {agents.map((agent) => (
                        <tr key={agent.id}>
                            <td>{agent.id}</td>
                            <td>{agent.name}</td>
                            <td>{agent.checkedIn ? "✅ Yes" : "❌ No"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
