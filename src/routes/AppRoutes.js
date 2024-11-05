import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Inicio from '../Pages/Inicio/Inicio';
import Login from '../Pages/login/Login';
import Register from '../Pages/Register/Register';
import Prova from '../Pages/Prova/Prova'
import Aula from '../Pages/Aula/Aula'
import Produto from '../Pages/Produto/Produto';
import ProfilePage from '../Pages/Profile/ProfilePage';
import DashBoard from '../Pages/dashboard/DashBoard'
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/prova" element={<Prova/>} />
        <Route path="/aula" element={<Aula/>} />
        <Route path="/produto" element={<Produto/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/dashboard" element={<DashBoard/>} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
