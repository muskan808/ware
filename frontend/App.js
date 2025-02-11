import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Agents from "./pages/Agents";
import Orders from "./pages/Orders";
import Warehouses from "./pages/Warehouses";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/warehouses">Warehouses</Link> |  
                <Link to="/agents">Agents</Link> |  
                <Link to="/orders">Orders</Link>
            </nav>
            <Routes>
                <Route path="/warehouses" element={<Warehouses />} />
                <Route path="/agents" element={<Agents />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </Router>
    );
}

export default App;
