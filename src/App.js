import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Registration/Signup";
import Signin from "./components/Registration/Signin";
import { Contact } from "./pages/contact/contact";
import Home from "./components/LandingPage/Home";
import ABOUT_US from "./pages/AboutUs/About_us";
import { VendorDashboard } from "./pages/Vendor/Vendor Dashboard/Vendor Dashboard";
import { Vendororder } from "./pages/Vendor/vendororder/vendororder";
import { Vendorproduct } from "./pages/Vendor/vendorproduct/vendorproduct";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<ABOUT_US />} />
          <Route path="/vendor/dashboard" element={<VendorDashboard />} />
          <Route path="/vendor/order" element={<Vendororder />} />
          <Route path="/vendor/product" element={<Vendorproduct />} />
          <Route path="/vendor/profile" element={<Vendorproduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
