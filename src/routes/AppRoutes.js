import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Inicio from '../Pages/Inicio/Inicio';
import Login from '../Pages/login/Login';
import Register from '../Pages/Register/Register';
import Prova from '../Pages/Prova/Prova'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/prova" element={<Prova/>} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
