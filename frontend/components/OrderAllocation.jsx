import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderAllocation = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders/pending').then(res => setOrders(res.data));
    }, []);

    const allocateOrders = () => {
        axios.post('/api/orders/allocate').then(() => alert('Orders allocated'));
    };

    return (
        <div>
            <h2>Order Allocation</h2>
            <button onClick={allocateOrders}>Allocate Orders</button>
            <ul>
                {orders.map(order => (
                    <li key={order._id}>{order.address} - {order.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderAllocation;
