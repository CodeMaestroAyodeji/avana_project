import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PasswordReset from "./pages/PasswordReset";
import DefaultPage from "./pages/DefaultPage";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Header from "./components/Header";  
import Footer from "./components/Footer";  
// eslint-disable-next-line
import PrivateRoute from './components/PrivateRoute';

import './App.css';

const App = () => {
  return (
    <Router>
      <Header /> 
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<DefaultPage />} />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
};

export default App;
