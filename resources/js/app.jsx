import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/home/index.jsx"

/**
 * App principal
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* Redireciona / para /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <div style={{ padding: 32 }}>
              <h1 style={{ fontSize: 24, fontWeight: "bold" }}>404</h1>
              <p>Página não encontrada</p>
              <a href="/home">Voltar para Home</a>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

/**
 * Bootstrap seguro do React
 */
const container = document.getElementById("app")

if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  console.error("Elemento #app não encontrado no DOM")
}
