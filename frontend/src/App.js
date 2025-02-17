import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Orders from "./components/Orders";
import Warehouses from "./components/warehouses";
import AgentCheckin from "./components/AgentCheckin";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Orders</Link> | <Link to="/warehouses">Warehouses</Link> | <Link to="/checkin">Agent Check-in</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/checkin" element={<AgentCheckin />} />
      </Routes>
    </Router>
  );
}

export default App;
