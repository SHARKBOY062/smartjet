import React from "react"

export default function Cards() {
  const cards = [
    { title: "Encontre seu destino", img: "/assets/card-1.jpg" },
    { title: "Revista digital", img: "/assets/card-2.jpg" },
    { title: "App SmartJet", img: "/assets/card-3.jpg" },
  ]

  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-4 lg:grid-cols-3">
          {cards.map((c,i)=>(
            <div key={i} className="rounded-2xl border p-4">
              <img src={c.img} alt="" className="rounded-xl mb-3" />
              <h3 className="font-extrabold">{c.title}</h3>
              <button className="mt-3 rounded-full bg-slate-900 px-5 py-2 text-sm text-white">
                Ver mais
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
