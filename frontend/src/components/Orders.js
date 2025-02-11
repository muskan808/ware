import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/orders")
            .then(response => setOrders(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Address</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.delivery_address}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
