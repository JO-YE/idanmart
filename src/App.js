import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./components/Registration/Signup";
import Signin from "./components/Registration/Signin";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
