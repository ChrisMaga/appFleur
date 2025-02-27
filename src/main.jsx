import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import telaInicio2 from './pages/telaInicio2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <Login />
    
  </React.StrictMode>,
)
// Criando Branch
/*/    <Router>
      <Routes>
        <Route path="/" element={<welcome />} />     
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    <Login /> /*/