import React from "react"

import Header from "./components/Header"
import AlertBar from "./components/AlertBar"
import Hero from "./components/Hero"
import SearchBox from "./components/SearchBox"
import ClubBanner from "./components/ClubBanner"
import Cards from "./components/Cards"
import AmericanAirlinesPartnership from "./components/AmericanAirlinesPartnership"
import TravelSteps from "./components/TravelSteps"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
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
