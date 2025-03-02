import React, { useState, useEffect } from 'react';
import { getOrders, addOrder, getWarehouses, agentCheckin, getAgents } from './api';
import axios from "axios"; // Import axios
import './App.css';

function App() {
  const [agents, setAgents] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [orders, setOrders] = useState([]);

  const fetchAgents = async () => {
    try {
      const response = await getAgents();
      setAgents(response.data);
    } catch (error) {
      console.error("Error fetching agents:", error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await getOrders();
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const fetchWarehouses = async () => {
    try {
      const response = await getWarehouses();
      setWarehouses(response.data);
    } catch (error) {
      console.error("Error fetching warehouses:", error);
    }
  };

  const handleOrderSubmit = async () => {
    try {
      await addOrder({});
      fetchOrders(); // Refresh the orders after submitting
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };

  const handleCheckin = async (agentId, warehouseId) => {
    const checkinData = { agentId, warehouseId };
    try {
      await agentCheckin(checkinData);
      fetchAgents(); // Refresh the agent data after check-in
    } catch (error) {
      console.error("Error during agent check-in:", error);
    }
  };

  useEffect(() => {
    fetchAgents();
    fetchWarehouses();
    fetchOrders();
  }, []);

  return (
    <div className="App">
      <h1>Agent Management System</h1>

      {/* Agents Table */}
      <section>
        <h2>Agents</h2>
        <button onClick={fetchAgents}>Fetch Agents</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Checked In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {agents.map(agent => (
              <tr key={agent.id}>
                <td>{agent.id}</td>
                <td>{agent.name}</td>
                <td>{agent.checked_in ? 'Yes' : 'No'}</td>
                <td>
                  <button onClick={() => handleCheckin(agent.id, 1)}>Check-in</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Warehouses Table */}
      <section>
        <h2>Warehouses</h2>
        <button onClick={fetchWarehouses}>Fetch Warehouses</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {warehouses.map(warehouse => (
              <tr key={warehouse.id}>
                <td>{warehouse.id}</td>
                <td>{warehouse.name}</td>
                <td>{warehouse.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Orders Table */}
      <section>
        <h2>Orders</h2>
        <button onClick={fetchOrders}>Fetch Orders</button>
        <button onClick={handleOrderSubmit}>Add Order</button>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Warehouse ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.warehouse_id}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
