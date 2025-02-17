import React, { useState } from "react";
import { agentCheckin } from "../services/apiService";

const AgentCheckin = () => {
  const [agentId, setAgentId] = useState("");

  const handleCheckin = async () => {
    await agentCheckin({ agent_id: agentId });
    alert("Check-in successful!");
  };

  return (
    <div>
      <h2>Agent Check-in</h2>
      <input type="text" placeholder="Agent ID" onChange={(e) => setAgentId(e.target.value)} />
      <button onClick={handleCheckin}>Check-in</button>
    </div>
  );
};

export default AgentCheckin;
