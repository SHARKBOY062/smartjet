import React, { useEffect, useMemo, useRef, useState } from "react"

function cn(...xs) {
  return xs.filter(Boolean).join(" ")
}

/* ===== ÍCONES (SVG) ===== */
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

function IconDoc({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 11h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconList({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 17h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M3.5 7h.01M3.5 12h.01M3.5 17h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconCheckIn({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M8 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconStatus({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ===== DESKTOP PÍLULAS ===== */
function Pill({ active, icon, children }) {
  return (
    <button
      type="button"
      className={cn(
        "relative shrink-0 inline-flex items-center gap-2",
        "h-12 px-5 rounded-xl",
        "bg-white text-[#1B2F5B]",
        "border border-slate-200 shadow-sm",
        "text-[15px] font-semibold whitespace-nowrap",
        "hover:bg-slate-50",
        active && "overflow-hidden after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-[#00A8C6]"
      )}
    >
      <span className="text-[#1B2F5B]">{icon}</span>
      <span>{children}</span>
    </button>
  )
}

/* ===== MOBILE TOP TABS (~50% menor) ===== */
function MobileTopTab({ active, icon, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex-1 inline-flex items-center gap-2",
        "h-[40px] px-3",
        "rounded-xl",
        "border border-slate-200",
        "shadow-[0_6px_14px_rgba(0,0,0,0.10)]",
        active ? "bg-white text-[#1B2F5B]" : "bg-white/55 text-[#1B2F5B]/55"
      )}
    >
      <span className={cn(active ? "text-[#1B2F5B]" : "text-[#1B2F5B]/45")}>{icon}</span>
      <span className="text-[14px] font-semibold leading-none">{children}</span>
    </button>
  )
}

function MobileInnerTab({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-9 px-4 rounded-xl",
        "text-[14px] font-medium",
        active ? "bg-[#00A8C6] text-white" : "bg-slate-100 text-[#1B2F5B]/45"
      )}
    >
      {children}
    </button>
  )
}

function Radio({ active, children, onClick }) {
  return (
    <button type="button" onClick={onClick} className="inline-flex items-center gap-3 text-[14px] text-[#1B2F5B]">
      <span
        className={cn(
          "h-6 w-6 rounded-full border-[3px] border-[#1B2F5B] grid place-items-center",
          active && "after:block after:h-3 after:w-3 after:rounded-full after:bg-[#1B2F5B]"
        )}
      />
      {children}
    </button>
  )
}

/**
 * Controller (front) puxando do Laravel:
 * GET /searchbox/options
 * Espera:
 * {
 *   origins: [{code,name}],
 *   destinations: [{code,name}],
 *   default: { tab, tripType, passageiros }
 * }
 */
function useSearchboxController() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [origins, setOrigins] = useState([])
  const [destinations, setDestinations] = useState([])

  // UI state
  const [topTab, setTopTab] = useState("voos") // "voos" | "minhaReserva"
  const [innerTab, setInnerTab] = useState("voos") // "voos" | "hoteis" | "realocacao"

  // form state
  const [tripType, setTripType] = useState("idaVolta") // "soIda" | "idaVolta"
  const [origem, setOrigem] = useState("")
  const [destino, setDestino] = useState("")
  const [usarMilhas, setUsarMilhas] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch("/searchbox/options", { headers: { Accept: "application/json" } })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()

        setOrigins(Array.isArray(data?.origins) ? data.origins : [])
        setDestinations(Array.isArray(data?.destinations) ? data.destinations : [])

        // defaults do backend (se vier)
        if (data?.default?.tab) setInnerTab(data.default.tab)
        if (data?.default?.tripType) setTripType(data.default.tripType)
      } catch (e) {
        setError(e?.message || "Erro ao carregar options")
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const swap = () => {
    setOrigem(destino)
    setDestino(origem)
  }

  const submit = () => {
    const payload = { topTab, innerTab, tripType, origem, destino, usarMilhas }
    console.log("SUBMIT:", payload)
    return payload
  }

  return {
    loading,
    error,

    origins,
    destinations,

    topTab,
    setTopTab,
    innerTab,
    setInnerTab,

    tripType,
    setTripType,
    origem,
    setOrigem,
    destino,
    setDestino,
    usarMilhas,
    setUsarMilhas,

    swap,
    submit,
  }
}

function SuggestList({ items = [], onPick }) {
  if (!items.length) return null
  return (
    <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-[9999] rounded-2xl border border-slate-200 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.14)] overflow-hidden">
      {items.map((a) => (
        <button
          key={a.code}
          type="button"
          onMouseDown={(e) => e.preventDefault()} // evita blur antes do clique
          onClick={() => onPick(a)}
          className="w-full text-left px-4 py-3 hover:bg-slate-50"
        >
          <div className="text-[14px] font-semibold text-[#1B2F5B]">{a.code}</div>
          <div className="text-[13px] text-slate-500">{a.name}</div>
        </button>
      ))}
    </div>
  )
}

export default function Hero() {
  const c = useSearchboxController()

  // controla qual campo está aberto
  const [openField, setOpenField] = useState(null) // "origem" | "destino" | null

  // refs pra não fechar quando clicar dentro
  const origemRootRef = useRef(null)
  const destinoRootRef = useRef(null)

  // sugestões: se input vazio, mostra os primeiros
  const origemSuggestions = useMemo(() => {
    const list = c.origins || []
    const q = c.origem.trim().toLowerCase()
    if (!q) return list.slice(0, 8)
    return list.filter((a) => `${a.code} ${a.name}`.toLowerCase().includes(q)).slice(0, 8)
  }, [c.origins, c.origem])

  const destinoSuggestions = useMemo(() => {
    const list = c.destinations || []
    const q = c.destino.trim().toLowerCase()
    if (!q) return list.slice(0, 8)
    return list.filter((a) => `${a.code} ${a.name}`.toLowerCase().includes(q)).slice(0, 8)
  }, [c.destinations, c.destino])

  // fecha dropdown quando clica fora
  useEffect(() => {
    const onDocDown = (e) => {
      const t = e.target
      const insideOrigem = origemRootRef.current && origemRootRef.current.contains(t)
      const insideDestino = destinoRootRef.current && destinoRootRef.current.contains(t)
      if (!insideOrigem && !insideDestino) setOpenField(null)
    }
    document.addEventListener("mousedown", onDocDown)
    return () => document.removeEventListener("mousedown", onDocDown)
  }, [])

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
          {/* FUNDO */}
          <img
            src="/banner/fundobanner.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00A8C6]/95 via-[#00A8C6]/55 to-transparent" />

          {/* ================= MOBILE ================= */}
          <div className="md:hidden relative z-10 px-4 pt-4 pb-6">
            <div className="mx-auto max-w-[360px]">
              {/* top tabs */}
              <div className="flex items-center gap-3">
                <MobileTopTab
                  active={c.topTab === "voos"}
                  onClick={() => c.setTopTab("voos")}
                  icon={<IconPlane className="h-4 w-4" />}
                >
                  Voos
                </MobileTopTab>

                <MobileTopTab
                  active={c.topTab === "minhaReserva"}
                  onClick={() => c.setTopTab("minhaReserva")}
                  icon={<IconDoc className="h-4 w-4" />}
                >
                  Minha reserva
                </MobileTopTab>
              </div>

              {/* CARD */}
              <div className="mt-4 rounded-[20px] bg-white border border-slate-200 overflow-visible shadow-[0_14px_40px_rgba(0,0,0,0.14)]">
                <div className="p-4">
                  {/* tabs internos */}
                  <div className="flex items-center gap-3">
                    <MobileInnerTab active={c.innerTab === "voos"} onClick={() => c.setInnerTab("voos")}>
                      Voos
                    </MobileInnerTab>
                    <MobileInnerTab active={c.innerTab === "hoteis"} onClick={() => c.setInnerTab("hoteis")}>
                      Hotéis
                    </MobileInnerTab>
                    <MobileInnerTab active={c.innerTab === "realocacao"} onClick={() => c.setInnerTab("realocacao")}>
                      Realocação
                    </MobileInnerTab>
                  </div>

                  {c.error && (
                    <div className="mt-4 rounded-xl bg-red-50 border border-red-200 px-3 py-2 text-[13px] text-red-700">
                      {c.error}
                    </div>
                  )}

                  {/* radios */}
                  <div className="mt-5 flex items-center gap-8">
                    <Radio active={c.tripType === "soIda"} onClick={() => c.setTripType("soIda")}>
                      Só ida
                    </Radio>
                    <Radio active={c.tripType === "idaVolta"} onClick={() => c.setTripType("idaVolta")}>
                      Ida e volta
                    </Radio>
                  </div>

                  {/* inputs (SEM overflow-hidden pra não cortar o dropdown) */}
                  <div className="mt-5 rounded-2xl border border-slate-200">
                    {/* ORIGEM */}
                    <div className="relative" ref={origemRootRef}>
                      <input
                        aria-label="Origem"
                        type="text"
                        value={c.origem}
                        onChange={(e) => {
                          c.setOrigem(e.target.value)
                          setOpenField("origem")
                        }}
                        onFocus={() => setOpenField("origem")}
                        onClick={() => setOpenField("origem")}
                        className="w-full px-4 py-4 text-[16px] text-[#1B2F5B] placeholder:text-slate-300 outline-none"
                        placeholder={c.loading ? "Carregando origens..." : "Origem"}
                        disabled={c.loading}
                        autoComplete="off"
                      />

                      {openField === "origem" && !c.loading && (
                        <SuggestList
                          items={origemSuggestions}
                          onPick={(a) => {
                            c.setOrigem(`${a.code} - ${a.name}`)
                            setOpenField(null)
                          }}
                        />
                      )}
                    </div>

                    <div className="h-px bg-slate-200" />

                    {/* DESTINO */}
                    <div className="relative" ref={destinoRootRef}>
                      <input
                        aria-label="Destino"
                        type="text"
                        value={c.destino}
                        onChange={(e) => {
                          c.setDestino(e.target.value)
                          setOpenField("destino")
                        }}
                        onFocus={() => setOpenField("destino")}
                        onClick={() => setOpenField("destino")}
                        className="w-full px-4 py-4 text-[16px] text-[#1B2F5B] placeholder:text-slate-300 outline-none pr-14"
                        placeholder={c.loading ? "Carregando destinos..." : "Destino"}
                        disabled={c.loading}
                        autoComplete="off"
                      />

                      {openField === "destino" && !c.loading && (
                        <SuggestList
                          items={destinoSuggestions}
                          onPick={(a) => {
                            c.setDestino(`${a.code} - ${a.name}`)
                            setOpenField(null)
                          }}
                        />
                      )}

                      {/* swap */}
                      <button
                        type="button"
                        onClick={c.swap}
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border-2 border-slate-200 bg-white grid place-items-center text-slate-500"
                        aria-label="Trocar origem e destino"
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M8 7l-3 3 3 3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path d="M5 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path
                            d="M16 17l3-3-3-3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path d="M19 14H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* checkbox */}
                  <button
                    type="button"
                    onClick={() => c.setUsarMilhas((v) => !v)}
                    className="mt-5 flex items-center gap-3 text-[14px] text-[#1B2F5B]"
                  >
                    <span
                      className={cn(
                        "h-6 w-6 rounded-md border-2 bg-white",
                        c.usarMilhas ? "border-[#00A8C6]" : "border-slate-300"
                      )}
                    />
                    Usar milhas AAdvantage®
                  </button>

                  {/* link */}
                  <button type="button" className="mt-6 w-full text-center text-[14px] font-semibold text-[#1B2F5B] underline">
                    ↻ Refazer minha última busca
                  </button>

                  {/* botão */}
                  <button
                    type="button"
                    onClick={c.submit}
                    className={cn(
                      "mt-6 w-full",
                      "h-12 rounded-full",
                      "bg-[#D6A4A4] text-white",
                      "text-[16px] font-medium",
                      "flex items-center justify-center gap-3"
                    )}
                  >
                    Procurar SMART
                    <span className="inline-flex h-8 w-8 rounded-full border-2 border-white/60 items-center justify-center">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M10 7l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="2.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              {/* ===== BANNER MOBILE (NO FLUXO) ===== */}
              <div className="relative mt-6 pb-8">
                <img
                  src="/banner/banenrmobile.webp"
                  alt=""
                  className="w-full max-w-[520px] mx-auto object-contain select-none drop-shadow-[0_22px_40px_rgba(0,0,0,0.22)]"
                  draggable={false}
                  onError={(e) => {
                    e.currentTarget.src = "/banner/bannermobile.webp"
                  }}
                />

                {/* setas (em cima do banner) */}
                <button
                  type="button"
                  className="absolute left-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/95 shadow-md grid place-items-center text-[#1B2F5B]"
                  aria-label="Anterior"
                >
                  <span className="text-2xl leading-none">‹</span>
                </button>
                <button
                  type="button"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/95 shadow-md grid place-items-center text-[#1B2F5B]"
                  aria-label="Próximo"
                >
                  <span className="text-2xl leading-none">›</span>
                </button>

                {/* dots */}
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/55" />
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span className="h-2 w-2 rounded-full bg-white/55" />
                </div>
              </div>
            </div>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:block">
            <div className="relative h-[clamp(320px,34vw,470px)]">
              {/* banner frente desktop */}
              <div className="absolute inset-x-0 top-0 bottom-[72px] z-10 flex items-center justify-center px-6 lg:px-10 pointer-events-none">
                <img
                  src="/banner/bannerfrente.webp"
                  alt=""
                  className={cn(
                    "h-full w-full object-contain",
                    "max-w-[1180px]",
                    "drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]",
                    "select-none"
                  )}
                  draggable={false}
                />
              </div>

              {/* pílulas */}
              <div className="absolute bottom-4 left-5 right-5 z-30">
                <div className="flex gap-3 flex-nowrap overflow-x-auto lg:overflow-visible">
                  <Pill active icon={<IconPlane className="h-5 w-5" />}>
                    Voos
                  </Pill>
                  <Pill icon={<IconList />}>Gerencie seu voo</Pill>
                  <Pill icon={<IconCheckIn />}>Check-in</Pill>
                  <Pill icon={<IconStatus />}>Status do voo</Pill>
                </div>
              </div>

              {/* setas desktop */}
              <button
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-40 h-12 w-12 rounded-full bg-white/95 text-[#1B2F5B] shadow-md hover:bg-white grid place-items-center"
                aria-label="Anterior"
              >
                <span className="text-2xl leading-none">‹</span>
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-40 h-12 w-12 rounded-full bg-white/95 text-[#1B2F5B] shadow-md hover:bg-white grid place-items-center"
                aria-label="Próximo"
              >
                <span className="text-2xl leading-none">›</span>
              </button>
            </div>
          </div>

          {/* respiro */}
          <div className="md:hidden h-2" />
        </div>
      </div>
    </section>
  )
}
