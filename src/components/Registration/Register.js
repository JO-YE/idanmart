import React from 'react';
/* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; */
import Login from './Login_nav';
import Signup from './Signup';

const register = () => {
  return (
    <div>
        <Login/>
        <Signup/>
    </div>
  )
}

export default register;
