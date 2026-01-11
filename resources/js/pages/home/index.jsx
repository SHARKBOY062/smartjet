import React from "react"

import Header from "./components/Header"
import AlertBar from "./components/AlertBar"
import Hero from "./components/Hero"
import SearchBox from "./components/SearchBox"
import ClubBanner from "./components/ClubBanner"
import Cards from "./components/Cards"
import HelpButton from "./components/HelpButton"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Header />
      <AlertBar />
      <Hero />
      <SearchBox />
      <ClubBanner />
      <Cards />
      <HelpButton />

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-600">
          © {new Date().getFullYear()} SmartJet
        </div>
      </footer>

    </div>
  )
}
