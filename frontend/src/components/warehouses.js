import React, { useState, useEffect } from "react";
import { addWarehouse, getWarehouses } from "../services/apiService";

const Warehouses = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [newWarehouse, setNewWarehouse] = useState({ name: "" });

  useEffect(() => {
    fetchWarehouses();
  }, []);

  const fetchWarehouses = async () => {
    const response = await getWarehouses();
    setWarehouses(response.data);
  };

  const handleAddWarehouse = async () => {
    await addWarehouse(newWarehouse);
    fetchWarehouses();
  };

  return (
    <div>
      <h2>Warehouses</h2>
      <input type="text" placeholder="Warehouse Name" onChange={(e) => setNewWarehouse({ ...newWarehouse, name: e.target.value })} />
      <button onClick={handleAddWarehouse}>Add Warehouse</button>

      <h3>Warehouse List</h3>
      <ul>
        {warehouses.map((warehouse) => (
          <li key={warehouse.id}>{warehouse.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Warehouses;
