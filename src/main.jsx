import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
// Importado de App.jsx, jsx é uma extensão da linguagem JavaScript que é usada pelo React para criar interfaces de usuário.
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
