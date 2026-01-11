import React, { useState } from "react"

export default function SearchBox() {
  const [tab, setTab] = useState("voos")

  return (
    <section className="bg-slate-50 pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="-mt-8 rounded-2xl border bg-white p-4 shadow-sm">
          <div className="flex gap-2">
            {["voos","hoteis","servicos"].map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold border ${
                  tab===t ? "bg-sky-600 text-white" : "bg-white"
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-5">
            <input className="rounded-xl border px-3 py-3" placeholder="Origem" />
            <input className="rounded-xl border px-3 py-3" placeholder="Destino" />
            <input className="rounded-xl border px-3 py-3" placeholder="Data ida" />
            <input className="rounded-xl border px-3 py-3" placeholder="Data volta" />
            <button className="rounded-xl bg-rose-600 text-white font-bold">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
