import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login_nav";
import Signup from "./Signup";
import Signin from "./Signin";

const Register = () => {
  return (
    <div>
      <Login /> {/* this will appear in all the registration component*/}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default Register;
