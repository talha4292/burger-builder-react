import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Order from "./components/Order";
import Auth from "./components/Auth";
import OrderList from "./components/OrderList";
import "./App.css"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="burger-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/orders" element={<OrderList />} />
        </Routes>
      </div> 
    </Router>
  );
}

export default App;
