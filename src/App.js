import React, { useEffect, useState } from 'react'
import MyContext from './my_context';
import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

export default function App() {
  const [fotos, setFotos] = useState([])
  const sharedFotos = { fotos, setFotos }

  // LLamamos la función que consume la API al momento de montar el componente
  useEffect(() => {
    consultarInformacion();
  }, []);

  // Función que consulta la API
  const consultarInformacion = async () => {
    const url = 'http://localhost:3000/fotos.json';
    const response = await fetch(url)
    const respuestaApi = await response.json()
    setFotos(respuestaApi.photos)
  }

  return (
    <div className="App">
      <MyContext.Provider value={sharedFotos}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
