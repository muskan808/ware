import React, { useState, useEffect } from "react";
import { addOrder, getOrders, assignOrders } from "../services/apiService";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ name: "", warehouse_id: "" });
  const [warehouseId, setWarehouseId] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await getOrders();
    setOrders(response.data);
  };

  const handleAddOrder = async () => {
    await addOrder(newOrder);
    fetchOrders();
  };

  const handleAssignOrders = async () => {
    await assignOrders(warehouseId);
    fetchOrders();
  };

  return (
    <div>
      <h2>Orders</h2>
      <input type="text" placeholder="Order Name" onChange={(e) => setNewOrder({ ...newOrder, name: e.target.value })} />
      <button onClick={handleAddOrder}>Add Order</button>

      <h3>Assign Orders</h3>
      <input type="text" placeholder="Warehouse ID" onChange={(e) => setWarehouseId(e.target.value)} />
      <button onClick={handleAssignOrders}>Assign Orders</button>

      <h3>Order List</h3>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.name} - Warehouse: {order.warehouse_id || "Unassigned"}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
