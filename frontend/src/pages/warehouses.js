import { useEffect, useState } from "react";
import axios from "axios";

const Warehouses = () => {
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/warehouses")
            .then((res) => setWarehouses(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Warehouses</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {warehouses.map((w) => (
                        <tr key={w._id}>
                            <td>{w.name}</td>
                            <td>{w.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Warehouses;
