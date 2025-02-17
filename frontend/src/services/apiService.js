import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const addOrder = (orderData) => axios.post(`${API_BASE_URL}/orders/add`, orderData);
export const getOrders = () => axios.get(`${API_BASE_URL}/orders`);
export const assignOrders = (warehouse_id) => axios.post(`${API_BASE_URL}/orders/assign`, { warehouse_id });

export const addWarehouse = (warehouseData) => axios.post(`${API_BASE_URL}/warehouses/add`, warehouseData);
export const getWarehouses = () => axios.get(`${API_BASE_URL}/warehouses`);

export const agentCheckin = (checkinData) => axios.post(`${API_BASE_URL}/agents/checkin`, checkinData);
