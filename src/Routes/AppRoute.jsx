import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// rutas
import Index from "../pages/Index";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Estudios from "../pages/Estudios";
import Proyectos from "../pages/Proyectos";
import Contacto from "../pages/Contacto";
function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/estudios" element={<Estudios />} />
        <Route path="/proyectos" element={<Proyectos />} />

        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
