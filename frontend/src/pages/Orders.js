import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/orders")
            .then((res) => setOrders(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Orders</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Warehouse</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((o) => (
                        <tr key={o._id}>
                            <td>{o.address}</td>
                            <td>{o.latitude}</td>
                            <td>{o.longitude}</td>
                            <td>{o.warehouse ? o.warehouse.name : "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
