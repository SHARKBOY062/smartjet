import React from "react"

export default function ClubBanner() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="overflow-hidden rounded-2xl border">
          <div className="grid items-center gap-4 bg-amber-400/90 p-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-extrabold">Clube de vantagens</h2>
              <p className="mt-1 text-sm">Economize em cada viagem</p>
              <button className="mt-4 rounded-full bg-white px-5 py-3 text-sm font-extrabold">
                Quero participar
              </button>
            </div>
            <div className="lg:col-span-5">
              {/* IMAGEM BANNER */}
              <img src="/assets/club.jpg" alt="" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
