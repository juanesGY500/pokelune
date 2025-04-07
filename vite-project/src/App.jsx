import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Aleatorios from './componentes/Aleatorios/Index'
import Capturados from './componentes/Capturados/Index'
import Favoritos from './componentes/Favoritos/Index'
import Lista from './componentes/Lista/Index'
import Pokemon from './componentes/Pokemon/Index'
import Usuarios from './componentes/Usuarios/Index'
import Menu from './componentes/Menu/Index';

function App() {

  return (
    <Router>

      <Menu />

        <Routes>
          <Route path="/" element={<Lista/>} />
          <Route path="/Usuarios" element={<Usuarios />} />
          <Route path="/Aleatorios" element={<Aleatorios />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="/Pokemon" element={<Pokemon />} />
          <Route path="/Capturados" element={<Capturados />} />
        </Routes>

    </Router>
  )
}

export default App
