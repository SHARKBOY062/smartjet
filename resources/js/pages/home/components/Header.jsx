import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
  const nav = [
    { label: "Ofertas / Destinos", to: "/home" },
    { label: "Minha Reserva", to: "/reserva" },
    { label: "Benefícios", to: "/beneficios" },
    { label: "Informações", to: "/informacoes" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/home" className="flex items-center gap-2">
            {/* TROQUE A LOGO AQUI */}
            <img src="/assets/logo.svg" alt="SmartJet" className="h-8" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {nav.map(n => (
              <Link key={n.label} to={n.to} className="hover:text-slate-900 text-slate-700">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/login" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
              Iniciar sessão
            </Link>
            <button className="rounded-full border px-3 py-2 text-sm">🇧🇷 Brasil ▾</button>
          </div>
        </div>
      </div>
    </header>
  )
}
