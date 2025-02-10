import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AgentDashboard = () => {
    const [agent, setAgent] = useState(null);

    useEffect(() => {
        axios.get('/api/agents/123').then(res => setAgent(res.data));
    }, []);

    const handleCheckIn = () => {
        axios.post('/api/agents/check-in', { agentId: '123' }).then(() => {
            alert('Checked in successfully');
        });
    };

    return (
        <div>
            <h2>Agent Dashboard</h2>
            <button onClick={handleCheckIn}>Check In</button>
            <h3>Total Orders: {agent?.totalOrders}</h3>
            <h3>Total KM: {agent?.totalKm}</h3>
            <h3>Earnings: ₹{agent?.earnings}</h3>
        </div>
    );
};

export default AgentDashboard;
