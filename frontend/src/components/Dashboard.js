import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [agents, setAgents] = useState([]);
    const [orders, setOrders] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    const API_BASE_URL = "http://localhost:5000/api"; 
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const agentsResponse = await axios.get(`${API_BASE_URL}/agents`);
            const ordersResponse = await axios.get(`${API_BASE_URL}/orders`);
            const warehousesResponse = await axios.get(`${API_BASE_URL}/warehouses`);
            
            setAgents(agentsResponse.data);
            setOrders(ordersResponse.data);
            setWarehouses(warehousesResponse.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Delivery Management Dashboard</h1>
            
            <div className="grid grid-cols-3 gap-4">
                {/* Agents Section */}
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Agents</h2>
                    <ul>
                        {agents.map((agent) => (
                            <li key={agent._id} className="border-b py-2">{agent.name} - {agent.status}</li>
                        ))}
                    </ul>
                </div>
                
                {/* Orders Section */}
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Orders</h2>
                    <ul>
                        {orders.map((order) => (
                            <li key={order._id} className="border-b py-2">{order.address} - {order.status}</li>
                        ))}
                    </ul>
                </div>
                
                {/* Warehouses Section */}
                <div className="bg-white p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold mb-2">Warehouses</h2>
                    <ul>
                        {warehouses.map((warehouse) => (
                            <li key={warehouse._id} className="border-b py-2">{warehouse.name} - {warehouse.location}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;