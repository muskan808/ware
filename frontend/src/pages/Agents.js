import { useEffect, useState } from "react";
import axios from "axios";

const Agents = () => {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/agents")
            .then((res) => setAgents(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h2>Agents</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Warehouse</th>
                    </tr>
                </thead>
                <tbody>
                    {agents.map((a) => (
                        <tr key={a._id}>
                            <td>{a.name}</td>
                            <td>{a.warehouse ? a.warehouse.name : "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Agents;
