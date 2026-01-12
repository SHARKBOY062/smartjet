import React, { useEffect, useState } from "react"

import Header from "./components/Header"
import AlertBar from "./components/AlertBar"
import Hero from "./components/Hero"
import SearchBox from "./components/SearchBox"
import ClubBanner from "./components/ClubBanner"
import Cards from "./components/Cards"
import AmericanAirlinesPartnership from "./components/AmericanAirlinesPartnership"
import TravelSteps from "./components/TravelSteps"
import Footer from "./components/Footer"

function cn(...xs) {
  return xs.filter(Boolean).join(" ")
}

/* ===== ÍCONE AVIÃO (MAIS BONITO + COM “RESPIRO” PRA NÃO CORTAR) ===== */
function IconPlane({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M6.8 22.9 40.5 7.8c.9-.4 1.8.4 1.5 1.4L33.9 41.2c-.3 1.1-1.7 1.3-2.4.5l-8.6-10.2-8.3 4.6c-.7.4-1.6-.1-1.7-.9l-.8-10.4-5.3-2c-1-.4-1-1.9 0-2.3Z"
        fill="currentColor"
      />
      <path
        d="M19.9 28.6 33.7 14.8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M19.9 28.6 14 36.1"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ===== PAGE LOADER (AVIÃO TANGENCIAL) ===== */
function PageLoader({ open }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center",
        "transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      {/* blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

      {/* loader */}
      <div className="relative z-10 flex flex-col items-center">
        {/* círculo */}
        <div className="relative h-40 w-40">
          <div className="absolute inset-0 rounded-full border border-white/40" />

          {/* container que gira */}
          <div className="absolute inset-0 animate-spin [animation-duration:1.4s] [animation-timing-function:linear]">
            {/* avião deslocado no raio */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <IconPlane
                className="
                  h-10 w-10
                  text-white
                  drop-shadow-[0_10px_22px_rgba(0,0,0,0.35)]
                  rotate-90
                "
              />
            </div>
          </div>

          {/* centro */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-white/80" />
          </div>
        </div>

        <div className="mt-5 text-white/90 text-sm font-medium tracking-wide">
          Carregando…
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      <PageLoader open={loading} />

      <Header />
      <AlertBar />
      <Hero />
      <SearchBox />
      <ClubBanner />
      <Cards />
      <AmericanAirlinesPartnership />
      <TravelSteps />
      <Footer />
    </div>
  )
}
