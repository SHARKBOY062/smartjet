import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

function cn(...xs) {
  return xs.filter(Boolean).join(" ")
}

function IconChevronDown({ className = "" }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconCart({ className = "" }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 7h15l-1.5 8.5a2 2 0 0 1-2 1.7H9a2 2 0 0 1-2-1.6L5.3 4.8A2 2 0 0 0 3.3 3H2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
      <path d="M18.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
    </svg>
  )
}

function IconLogin({ className = "" }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 17l5-5-5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12H3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 4v16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.35"
      />
    </svg>
  )
}

function Flag({ code, alt }) {
  const src = `https://flagcdn.com/w40/${code}.png`
  return (
    <img
      src={src}
      alt={alt}
      className="h-5 w-5 rounded-full object-cover ring-1 ring-slate-200"
      loading="lazy"
      draggable={false}
    />
  )
}

export default function Header() {
  const nav = [
    { label: "Ofertas / Destinos", to: "/home" },
    { label: "Minha Reserva", to: "/reserva" },
    { label: "Benefícios JetSMART", to: "/beneficios" },
    { label: "Informações para sua viagem", to: "/informacoes" },
  ]

  const languages = [
    { code: "br", label: "Brasil" },
    { code: "us", label: "Estados Unidos" },
    { code: "es", label: "Espanha" },
    { code: "mx", label: "México" },
    { code: "ar", label: "Argentina" },
    { code: "cl", label: "Chile" },
    { code: "co", label: "Colômbia" },
    { code: "pe", label: "Peru" },
    { code: "py", label: "Paraguai" },
    { code: "uy", label: "Uruguai" },
    { code: "do", label: "Rep. Dominicana" },
  ]

  const [langOpen, setLangOpen] = useState(false)
  const [langSelected, setLangSelected] = useState(languages[0])
  const [mobileOpen, setMobileOpen] = useState(false)

  const langRef = useRef(null)

  useEffect(() => {
    function onDocClick(e) {
      if (!langRef.current) return
      if (!langRef.current.contains(e.target)) setLangOpen(false)
    }
    document.addEventListener("mousedown", onDocClick)
    return () => document.removeEventListener("mousedown", onDocClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4">
        {/* Altura menor e mais “real” */}
        <div className="flex h-[62px] items-center justify-between gap-3">
          {/* LOGO */}
          <Link to="/home" className="flex items-center shrink-0">
            <img
              src="/logo/logosamrtjett.svg"
              alt="SmartJet"
              className="h-8 w-auto"
              draggable={false}
            />
          </Link>

          {/* NAV DESKTOP (fonte menor + gaps menores) */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#1B2F5B]">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                className="inline-flex items-center gap-1 hover:opacity-80"
              >
                {n.label}
                <IconChevronDown className="opacity-70" />
              </Link>
            ))}
          </nav>

          {/* AÇÕES (tudo menor) */}
          <div className="flex items-center gap-2">
            {/* Botão login (não quebra + tamanho correto) */}
            <Link
              to="/login"
              className={cn(
                "hidden sm:inline-flex items-center justify-center gap-2",
                "h-10",
                "px-5",
                "rounded-full",
                "bg-[#1B2F5B] text-white",
                "text-[14px] font-semibold",
                "leading-none",
                "whitespace-nowrap",
                "shadow-sm hover:brightness-110"
              )}
            >
              <span>Iniciar sessão</span>
              <IconLogin className="opacity-95" />
            </Link>

            {/* Carrinho (menor) */}
            <button
              type="button"
              className={cn(
                "relative inline-flex items-center justify-center",
                "h-10 w-10",
                "rounded-full",
                "border border-slate-200",
                "text-[#1B2F5B]",
                "hover:bg-slate-50"
              )}
              aria-label="Carrinho"
            >
              <IconCart />
              <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 rounded-full bg-[#8A1B2A] text-white text-[12px] font-bold inline-flex items-center justify-center">
                4
              </span>
            </button>

            {/* Idioma */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className={cn(
                  "inline-flex items-center gap-2",
                  "h-10",
                  "pl-2 pr-3",
                  "rounded-full",
                  "border border-slate-200",
                  "text-[#1B2F5B]",
                  "hover:bg-slate-50"
                )}
                aria-haspopup="menu"
                aria-expanded={langOpen}
              >
                <Flag code={langSelected.code} alt={langSelected.label} />
                <span className="text-[14px] font-semibold hidden sm:inline">
                  {langSelected.label}
                </span>
                <IconChevronDown className={cn("opacity-70 transition", langOpen && "rotate-180")} />
              </button>

              {langOpen && (
                <div
                  className={cn(
                    "absolute right-0 mt-2 w-64",
                    "rounded-2xl border border-slate-200 bg-white",
                    "shadow-xl overflow-hidden"
                  )}
                  role="menu"
                >
                  <div className="py-1">
                    {languages.map((l) => {
                      const active = l.code === langSelected.code
                      return (
                        <button
                          key={l.code}
                          type="button"
                          onClick={() => {
                            setLangSelected(l)
                            setLangOpen(false)
                          }}
                          className={cn(
                            "w-full flex items-center gap-3 px-4 py-2.5 text-left",
                            "text-[#1B2F5B] text-[14px]",
                            "hover:bg-slate-50",
                            active && "bg-slate-50"
                          )}
                          role="menuitem"
                        >
                          <Flag code={l.code} alt={l.label} />
                          <span className="font-medium">{l.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 text-[#1B2F5B] hover:bg-slate-50"
              aria-label="Menu"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* NAV MOBILE */}
        {mobileOpen && (
          <div className="lg:hidden pb-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-3">
              <div className="grid gap-2">
                {nav.map((n) => (
                  <Link
                    key={n.label}
                    to={n.to}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-[#1B2F5B] hover:bg-slate-50 text-[14px]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="font-semibold">{n.label}</span>
                    <IconChevronDown className="opacity-60" />
                  </Link>
                ))}

                <Link
                  to="/login"
                  className="sm:hidden mt-2 inline-flex items-center justify-center gap-2 h-10 rounded-full bg-[#1B2F5B] text-white font-semibold text-[14px]"
                  onClick={() => setMobileOpen(false)}
                >
                  Iniciar sessão <IconLogin />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
