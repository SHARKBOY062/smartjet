import React, { useState } from "react"

function cn(...xs) {
  return xs.filter(Boolean).join(" ")
}

/* ===== ÍCONES ===== */
function IconPlane({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.5 12.5l7.6 1.6 4.3 6.7 2-1.1-2.6-6.1 6.8 1.4c.8.2 1.5-.4 1.5-1.2 0-.6-.4-1.1-1-1.2l-6.8-1.4 3.4-5.8-2-1.1-5 5-7.6-1.6c-.7-.1-1.3.4-1.3 1.1 0 .6.4 1.1 1 1.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function IconHotel({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 20v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 8h.01M12 8h.01M16 8h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function IconBus({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 17V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11" stroke="currentColor" strokeWidth="2" />
      <path d="M6 13h12" stroke="currentColor" strokeWidth="2" />
      <path d="M8 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
      <path d="M16 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
    </svg>
  )
}

function IconCalendar({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3v2M17 3v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 8h16" stroke="currentColor" strokeWidth="2" />
      <path d="M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function IconUser({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" stroke="currentColor" strokeWidth="2" />
      <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

/* ===== UI ===== */
function Radio({ active, children }) {
  return (
    <label className="inline-flex items-center gap-3 text-[#1B2F5B]">
      <span
        className={cn(
          "h-8 w-8 rounded-full border-[3px] border-[#1B2F5B] grid place-items-center",
          active && "after:block after:h-3.5 after:w-3.5 after:rounded-full after:bg-[#1B2F5B]"
        )}
      />
      <span className="text-[20px]">{children}</span>
    </label>
  )
}

export default function SearchBoxDesktop() {
  const [tab, setTab] = useState("voos") // voos | hoteis | realocacao

  return (
    <section className="hidden md:block bg-slate-50 pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-7 lg:p-8">
            {/* Tabs topo */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setTab("voos")}
                className={cn(
                  "inline-flex items-center gap-3 h-14 px-6 rounded-2xl text-[18px] font-medium",
                  tab === "voos" ? "bg-[#00A8C6] text-white" : "bg-slate-100 text-[#1B2F5B]/55"
                )}
              >
                <IconPlane />
                Voos
              </button>

              <button
                type="button"
                onClick={() => setTab("hoteis")}
                className={cn(
                  "inline-flex items-center gap-3 h-14 px-6 rounded-2xl text-[18px] font-medium",
                  tab === "hoteis" ? "bg-[#00A8C6] text-white" : "bg-slate-100 text-[#1B2F5B]/55"
                )}
              >
                <IconHotel />
                Hotéis
              </button>

              <button
                type="button"
                onClick={() => setTab("realocacao")}
                className={cn(
                  "inline-flex items-center gap-3 h-14 px-6 rounded-2xl text-[18px] font-medium",
                  tab === "realocacao" ? "bg-[#00A8C6] text-white" : "bg-slate-100 text-[#1B2F5B]/55"
                )}
              >
                <IconBus />
                Realocação
              </button>
            </div>

            {/* ===== VOOS (print 1) ===== */}
            {tab === "voos" && (
              <>
                <div className="mt-6 flex items-center gap-8">
                  <Radio>Só ida</Radio>
                  <Radio active>Ida e volta</Radio>
                </div>

                <div className="mt-5 grid grid-cols-12 gap-5 items-center">
                  {/* Origem/Destino juntos (com divisor e swap) */}
                  <div className="col-span-12 lg:col-span-5">
                    <div className="relative h-14 rounded-xl border border-slate-300 bg-white overflow-hidden flex">
                      <div className="flex-1 flex items-center justify-between px-5 text-slate-300">
                        <span className="text-[18px]">Origem</span>
                        <svg className="h-5 w-5 opacity-40" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      <div className="w-px bg-slate-300" />

                      <div className="flex-1 flex items-center justify-between px-5 text-slate-300">
                        <span className="text-[18px]">Destino</span>
                        <svg className="h-5 w-5 opacity-40" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>

                      {/* círculo swap no meio */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-slate-300 bg-white grid place-items-center text-slate-300">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M7 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M15 5l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M17 16H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M9 19l-3-3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Datas */}
                  <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                    <div className="h-14 rounded-xl border border-slate-300 bg-white px-5 flex items-center justify-between text-slate-300">
                      <span className="text-[18px]">Data de ida</span>
                      <IconCalendar className="opacity-40" />
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                    <div className="h-14 rounded-xl border border-slate-300 bg-white px-5 flex items-center justify-between text-slate-300">
                      <span className="text-[18px]">Data de volta</span>
                      <IconCalendar className="opacity-40" />
                    </div>
                  </div>

                  {/* Passageiros (borda azul) */}
                  <div className="col-span-12 lg:col-span-3">
                    <div className="h-14 rounded-xl border-2 border-[#1B2F5B] bg-white px-5 flex items-center justify-between text-[#1B2F5B]">
                      <span className="text-[18px] font-medium">1 passageiro</span>
                      <IconUser className="opacity-40" />
                    </div>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="mt-6 flex items-center gap-4 text-[#1B2F5B]">
                  <span className="h-4 w-4 rounded-sm border border-slate-400" />
                  <span className="text-[20px]">Usar milhas AAdvantage®</span>
                </div>

                {/* Rodapé: refazer + código + botão */}
                <div className="mt-10 flex items-center justify-between gap-6">
                  <button type="button" className="text-[#1B2F5B] font-semibold underline">
                    ↻ Refazer minha última busca
                  </button>

                  <div className="flex items-center gap-6">
                    <button type="button" className="text-[#1B2F5B] inline-flex items-center gap-3">
                      <span className="text-2xl leading-none">+</span>
                      <span className="text-[18px]">Inserir código promocional</span>
                    </button>

                    <button
                      type="button"
                      className="h-14 px-8 rounded-full bg-[#D8A3A3] text-white text-[22px] font-medium inline-flex items-center gap-4"
                    >
                      Procurar SMART
                      <span className="inline-flex h-9 w-9 rounded-full border-2 border-white/70 items-center justify-center">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* ===== HOTÉIS (print 2) ===== */}
            {tab === "hoteis" && (
              <>
                <h2 className="mt-7 text-[28px] font-semibold text-[#1B2F5B]">Encuentra el alojamiento perfecto</h2>

                <div className="mt-8 grid grid-cols-12 gap-5 items-end">
                  <div className="col-span-12 lg:col-span-5">
                    <label className="block text-[#1B2F5B] text-[18px] mb-2">Destino</label>
                    <div className="h-14 rounded-xl border border-slate-300 px-5 text-slate-300 flex items-center text-[18px]">
                      Destino
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                    <label className="block text-[#1B2F5B] text-[18px] mb-2">Llegada</label>
                    <div className="h-14 rounded-xl border border-slate-300 px-5 flex items-center justify-between text-[#1B2F5B] text-[18px]">
                      11/01/2026 <IconCalendar className="opacity-70" />
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                    <label className="block text-[#1B2F5B] text-[18px] mb-2">Salida</label>
                    <div className="h-14 rounded-xl border border-slate-300 px-5 flex items-center justify-between text-[#1B2F5B] text-[18px]">
                      12/01/2026 <IconCalendar className="opacity-70" />
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-6 lg:col-span-1">
                    <label className="block text-[#1B2F5B] text-[18px] mb-2">Habitaciones</label>
                    <div className="h-14 rounded-xl border border-slate-300 px-5 flex items-center text-[#1B2F5B] text-[18px]">
                      1 Habitación
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                    <label className="block text-[#1B2F5B] text-[18px] mb-2">Adultos</label>
                    <div className="h-14 rounded-xl border border-slate-300 px-5 flex items-center text-[#1B2F5B] text-[18px]">
                      1 Adulto
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <div className="text-[#1B2F5B] text-[18px]">
                    Gestionado por <span className="font-bold text-[26px] text-[#003580]">Booking.com</span>
                  </div>

                  <button
                    type="button"
                    className="h-14 px-10 rounded-full bg-[#B3262E] text-white text-[22px] font-medium inline-flex items-center gap-3"
                  >
                    Buscar <span aria-hidden>→</span>
                  </button>
                </div>
              </>
            )}

            {/* ===== REALOCAÇÃO ===== */}
            {tab === "realocacao" && (
              <div className="mt-10 text-[#1B2F5B] text-[18px] opacity-70">
                Realocação (estrutura pronta). Se quiser ela idêntica também, manda o print dessa aba.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
