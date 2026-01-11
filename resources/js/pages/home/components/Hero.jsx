import React from "react"

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 pt-6">
        <div className="relative overflow-hidden rounded-2xl border bg-slate-900">
          {/* IMAGEM HERO (placeholder) */}
          <img
            src="/assets/hero.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20" />

          <div className="relative grid gap-6 p-6 lg:grid-cols-12 lg:p-10 text-white">
            <div className="lg:col-span-7">
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                NOVO DESTINO
              </span>
              <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
                Explore novos caminhos
              </h1>
              <p className="mt-3 max-w-xl text-white/80">
                Campanha promocional com imagens e textos substituíveis.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur border border-white/15">
                <div className="flex justify-between gap-4">
                  <div>
                    <div className="text-xs">ATÉ</div>
                    <div className="text-5xl font-black">20%</div>
                    <div className="text-xs">OFF</div>
                  </div>
                  <div className="flex-1">
                    <input
                      className="w-full rounded-lg bg-white/10 px-3 py-2 text-sm border border-white/20 outline-none"
                      placeholder="Código promocional"
                    />
                    <button className="mt-2 w-full rounded-lg bg-sky-500 py-2 text-sm font-bold text-slate-900">
                      Aplicar
                    </button>
                  </div>
                </div>

                <button className="mt-4 w-full rounded-full bg-rose-600 py-3 text-sm font-extrabold">
                  Comprar agora
                </button>
              </div>
            </div>
          </div>

          {/* CONTROLES DO SLIDER (UI) */}
          <button className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white">‹</button>
          <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white">›</button>
        </div>
      </div>
    </section>
  )
}
