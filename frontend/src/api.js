import axios from "axios";

const API_URL = "http://localhost:5000";

export const getWarehouses = () => axios.get(`${API_URL}/warehouses/`);
export const getAgents = () => axios.get(`${API_URL}/agents`);
export const getOrders = () => axios.get(`${API_URL}/orders`);
export const assignOrders = (warehouseId) =>
  axios.post(`${API_URL}/orders/assign`, { warehouse_id: warehouseId });
