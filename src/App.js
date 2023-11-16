import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Registration/Signup";
import Signin from "./components/Registration/Signin";
import { Contact } from "./pages/contact/contact";
import Home from "./components/LandingPage/Home";
import ABOUT_US from "./pages/AboutUs/About_us";
import { VendorDashboard } from "./pages/Vendor Dashboard/Vendor Dashboard";


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
          <Route path="/Vendor/dashboard" element={<VendorDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
