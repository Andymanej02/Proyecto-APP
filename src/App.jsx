import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';
import './App.css';

import ServiciosPage from './pages/ServiciesPage/ServiciosPage';
import { GuidePage } from './pages/GuidePage/GuidePage';
import Footer from './components/Footer'; // Ajusta la ruta según la ubicación de Footer.jsx


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>

      <Footer /> 
    </>
  );
}

export default App;
