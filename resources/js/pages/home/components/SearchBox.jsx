import React, { useEffect, useMemo, useRef, useState } from "react"

const cn = (...x) => x.filter(Boolean).join(" ")

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
      <path
        d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 20v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
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
      <path
        d="M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
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
function Radio({ active, children, onClick }) {
  return (
    <button type="button" onClick={onClick} className="inline-flex items-center gap-3 text-[#1B2F5B]">
      <span
        className={cn(
          "h-8 w-8 rounded-full border-[3px] border-[#1B2F5B] grid place-items-center",
          active && "after:block after:h-3.5 after:w-3.5 after:rounded-full after:bg-[#1B2F5B]"
        )}
      />
      <span className="text-[20px]">{children}</span>
    </button>
  )
}

function SuggestList({ items = [], onPick, header, onBack, emptyText = "Nada encontrado" }) {
  return (
    <div
      className={cn(
        "absolute left-0 right-0 top-[calc(100%+8px)] z-[9999]",
        "rounded-2xl border border-slate-200 bg-white",
        "shadow-[0_14px_40px_rgba(0,0,0,0.14)] overflow-hidden"
      )}
    >
      {(header || onBack) && (
        <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
          <div className="text-[13px] font-semibold text-[#1B2F5B]">{header || ""}</div>
          {onBack && (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={onBack}
              className="text-[13px] text-slate-500 hover:text-slate-700"
            >
              ← Voltar
            </button>
          )}
        </div>
      )}

      <div className="max-h-[320px] overflow-auto">
        {!items.length ? (
          <div className="px-4 py-4 text-[13px] text-slate-500">{emptyText}</div>
        ) : (
          items.map((a) => (
            <button
              key={a.code}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onPick(a)}
              className="w-full text-left px-4 py-3 hover:bg-slate-50"
            >
              <div className="text-[14px] font-semibold text-[#1B2F5B]">{a.code}</div>
              <div className="text-[13px] text-slate-500">{a.name}</div>
            </button>
          ))
        )}
      </div>
    </div>
  )
}

/* ===== DATEPICKER (custom) ===== */
const MONTHS_PT = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]
const WEEK_PT = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"]

function pad2(n) {
  return String(n).padStart(2, "0")
}
function isoToBR(iso) {
  if (!iso) return ""
  const [y, m, d] = iso.split("-")
  if (!y || !m || !d) return ""
  return `${d}/${m}/${y}`
}
function toISODate(d) {
  const y = d.getFullYear()
  const m = pad2(d.getMonth() + 1)
  const day = pad2(d.getDate())
  return `${y}-${m}-${day}`
}
function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1)
}
function addMonths(d, n) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1)
}
function isSameDay(a, b) {
  if (!a || !b) return false
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}
function isBeforeDay(a, b) {
  const aa = new Date(a.getFullYear(), a.getMonth(), a.getDate()).getTime()
  const bb = new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime()
  return aa < bb
}

function DatePickerField({ label, valueISO, onChangeISO, minISO, placeholder = "Selecionar" }) {
  const rootRef = useRef(null)
  const [open, setOpen] = useState(false)

  const minDate = useMemo(() => {
    if (!minISO) return null
    const [y, m, d] = minISO.split("-").map((x) => parseInt(x, 10))
    if (!y || !m || !d) return null
    return new Date(y, m - 1, d)
  }, [minISO])

  const selectedDate = useMemo(() => {
    if (!valueISO) return null
    const [y, m, d] = valueISO.split("-").map((x) => parseInt(x, 10))
    if (!y || !m || !d) return null
    return new Date(y, m - 1, d)
  }, [valueISO])

  const [view, setView] = useState(() => startOfMonth(selectedDate || new Date()))

  // quando abre, alinha o mês com a data selecionada (se existir)
  useEffect(() => {
    if (open) setView(startOfMonth(selectedDate || new Date()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  useEffect(() => {
    const onDown = (e) => {
      const t = e.target
      if (rootRef.current && !rootRef.current.contains(t)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  const grid = useMemo(() => {
    const first = startOfMonth(view)
    const firstWeekday = (first.getDay() + 6) % 7 // 0=Seg ... 6=Dom
    const start = new Date(first)
    start.setDate(first.getDate() - firstWeekday)

    const days = []
    for (let i = 0; i < 42; i++) {
      const d = new Date(start)
      d.setDate(start.getDate() + i)
      days.push(d)
    }
    return days
  }, [view])

  const pick = (d) => {
    if (minDate && isBeforeDay(d, minDate)) return
    onChangeISO(toISODate(d))
    setOpen(false)
  }

  const display = valueISO ? isoToBR(valueISO) : ""

  return (
    <div className="relative" ref={rootRef}>
      <label className="block text-[#1B2F5B] text-[13px] mb-1">{label}</label>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "h-14 w-full rounded-xl border border-slate-300 bg-white px-4",
          "flex items-center justify-between text-left"
        )}
      >
        <span className={cn("text-[16px]", display ? "text-[#1B2F5B]" : "text-slate-300")}>
          {display || placeholder}
        </span>
        <IconCalendar className="opacity-40 shrink-0" />
      </button>

      {open && (
        <div
          className={cn(
            "absolute left-0 top-[calc(100%+8px)] z-[9999]",
            "w-[280px]",
            "rounded-2xl border border-slate-200 bg-white",
            "shadow-[0_10px_40px_rgba(0,0,0,0.12)] overflow-hidden"
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setView((v) => addMonths(v, -1))}
              className="h-8 w-8 rounded-full grid place-items-center hover:bg-slate-100 text-[#1B2F5B]"
              aria-label="Mês anterior"
            >
              ‹
            </button>

            <div className="text-[15px] font-semibold text-[#1B2F5B]">
              {MONTHS_PT[view.getMonth()]} {view.getFullYear()}
            </div>

            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setView((v) => addMonths(v, 1))}
              className="h-8 w-8 rounded-full grid place-items-center hover:bg-slate-100 text-[#1B2F5B]"
              aria-label="Próximo mês"
            >
              ›
            </button>
          </div>

          {/* Body */}
          <div className="px-4 py-3">
            <div className="grid grid-cols-7 gap-1 mb-2 text-[12px] text-slate-500 text-center font-medium">
              {WEEK_PT.map((w) => (
                <div key={w}>{w}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-[2px]">
              {grid.map((d, idx) => {
                const isCurrentMonth = d.getMonth() === view.getMonth()
                const disabled = minDate ? isBeforeDay(d, minDate) : false
                const selected = selectedDate ? isSameDay(d, selectedDate) : false

                return (
                  <button
                    key={`${d.toISOString()}-${idx}`}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => pick(d)}
                    disabled={disabled}
                    className={cn(
                      "h-9 w-9 rounded-full text-[14px] flex items-center justify-center transition-colors",
                      isCurrentMonth ? "text-[#1B2F5B]" : "text-slate-300",
                      disabled && "opacity-40 cursor-not-allowed",
                      !disabled && "hover:bg-slate-100",
                      selected && "bg-[#00A8C6] text-white hover:bg-[#00A8C6]"
                    )}
                  >
                    {d.getDate()}
                  </button>
                )
              })}
            </div>

            {valueISO && (
              <div className="mt-3 flex justify-between items-center">
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    onChangeISO("")
                    setOpen(false)
                  }}
                  className="text-[13px] text-slate-500 hover:text-slate-700"
                >
                  Limpar
                </button>

                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setOpen(false)}
                  className="text-[13px] font-semibold text-[#1B2F5B]"
                >
                  OK
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

/* ===== PASSAGEIROS (Adultos/Crianças) ===== */
function QtyButton({ onClick, disabled, children }) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "h-9 w-9 rounded-full border border-slate-200 grid place-items-center",
        disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-slate-50"
      )}
      aria-label={children === "+" ? "Aumentar" : "Diminuir"}
    >
      <span className="text-[18px] leading-none text-[#1B2F5B]">{children}</span>
    </button>
  )
}

function PassengerField({ adults, children, onChange }) {
  const rootRef = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onDown = (e) => {
      const t = e.target
      if (rootRef.current && !rootRef.current.contains(t)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  const total = (adults || 0) + (children || 0)
  const label = `${total} ${total === 1 ? "passageiro" : "passageiros"}`

  const setAdults = (next) => onChange({ adults: Math.max(1, next), children })
  const setChildren = (next) => onChange({ adults, children: Math.max(0, next) })

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="h-14 w-full rounded-xl border-2 border-[#1B2F5B] bg-white px-5 flex items-center justify-between text-[#1B2F5B]"
      >
        <span className="text-[18px] font-medium">{label}</span>
        <IconUser className="opacity-40" />
      </button>

      {open && (
        <div
          className={cn(
            "absolute left-0 right-0 top-[calc(100%+8px)] z-[9999]",
            "rounded-2xl border border-slate-200 bg-white",
            "shadow-[0_14px_40px_rgba(0,0,0,0.14)] overflow-hidden"
          )}
        >
          <div className="px-4 py-3 border-b border-slate-100">
            <div className="text-[13px] font-semibold text-[#1B2F5B]">Passageiros</div>
            <div className="text-[12px] text-slate-500 mt-0.5">Selecione adultos e crianças</div>
          </div>

          <div className="px-4 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <div className="text-[14px] font-semibold text-[#1B2F5B]">Adultos</div>
                <div className="text-[12px] text-slate-500">12+ anos</div>
              </div>

              <div className="flex items-center gap-3">
                <QtyButton onClick={() => setAdults(adults - 1)} disabled={adults <= 1}>
                  −
                </QtyButton>
                <div className="w-8 text-center text-[14px] font-semibold text-[#1B2F5B]">{adults}</div>
                <QtyButton onClick={() => setAdults(adults + 1)} disabled={adults >= 9}>
                  +
                </QtyButton>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <div className="text-[14px] font-semibold text-[#1B2F5B]">Crianças</div>
                <div className="text-[12px] text-slate-500">2–11 anos</div>
              </div>

              <div className="flex items-center gap-3">
                <QtyButton onClick={() => setChildren(children - 1)} disabled={children <= 0}>
                  −
                </QtyButton>
                <div className="w-8 text-center text-[14px] font-semibold text-[#1B2F5B]">{children}</div>
                <QtyButton onClick={() => setChildren(children + 1)} disabled={adults + children >= 9}>
                  +
                </QtyButton>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setOpen(false)}
                className="h-10 px-4 rounded-full border border-slate-200 text-[#1B2F5B] text-[14px] font-semibold hover:bg-slate-50"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * GET /searchbox/options
 * Espera:
 * { origins:[], destinations:[], countries:[], cities_by_country:{...}, default:{...} }
 */
function useSearchboxOptions() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [origins, setOrigins] = useState([])
  const [destinations, setDestinations] = useState([])

  const [countries, setCountries] = useState([])
  const [citiesByCountry, setCitiesByCountry] = useState({})

  const [defaults, setDefaults] = useState({ tab: "voos", tripType: "idaVolta", passageiros: 1 })

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

        setCountries(Array.isArray(data?.countries) ? data.countries.map((c) => ({ code: c.id, name: c.name })) : [])
        setCitiesByCountry(typeof data?.cities_by_country === "object" && data?.cities_by_country ? data.cities_by_country : {})

        setDefaults({
          tab: data?.default?.tab || "voos",
          tripType: data?.default?.tripType || "idaVolta",
          passageiros: typeof data?.default?.passageiros === "number" ? data.default.passageiros : 1,
        })
      } catch (e) {
        setError(e?.message || "Erro ao carregar options")
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { loading, error, origins, destinations, countries, citiesByCountry, defaults }
}

export default function SearchBoxDesktop() {
  const opt = useSearchboxOptions()

  const [tab, setTab] = useState("voos")

  // VOOS
  const [tripType, setTripType] = useState("idaVolta")
  const [origem, setOrigem] = useState("")
  const [destino, setDestino] = useState("")
  const [usarMilhas, setUsarMilhas] = useState(false)

  // DATAS (ISO)
  const [dataIda, setDataIda] = useState("")
  const [dataVolta, setDataVolta] = useState("")

  // PASSAGEIROS
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)

  // dropdown open
  const [openField, setOpenField] = useState(null) // "origem" | "destino" | null

  // ORIGEM: navegação país -> cidade
  const [origemStep, setOrigemStep] = useState("country") // "country" | "city"
  const [selectedCountry, setSelectedCountry] = useState(null)

  const origemRootRef = useRef(null)
  const destinoRootRef = useRef(null)

  useEffect(() => {
    if (!opt.loading) {
      setTab(opt.defaults.tab || "voos")
      setTripType(opt.defaults.tripType || "idaVolta")
      const baseAdults = opt.defaults.passageiros || 1
      setAdults(Math.max(1, baseAdults))
      setChildren(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opt.loading])

  // se mudar pra "Só ida", limpa volta
  useEffect(() => {
    if (tripType === "soIda") setDataVolta("")
  }, [tripType])

  // garante que volta não seja menor que ida
  useEffect(() => {
    if (tripType !== "idaVolta") return
    if (!dataIda || !dataVolta) return
    const ida = new Date(dataIda)
    const volta = new Date(dataVolta)
    if (volta.getTime() < ida.getTime()) setDataVolta("")
  }, [dataIda, dataVolta, tripType])

  // ===== ORIGEM SUGGESTIONS (countries/cities) =====
  const origemCountrySuggestions = useMemo(() => {
    const list = opt.countries || []
    const q = origem.trim().toLowerCase()
    if (!q) return list.slice(0, 12)
    return list.filter((a) => `${a.code} ${a.name}`.toLowerCase().includes(q)).slice(0, 12)
  }, [opt.countries, origem])

  const origemCitySuggestions = useMemo(() => {
    const raw = selectedCountry ? opt.citiesByCountry?.[selectedCountry] : []
    const list = Array.isArray(raw) ? raw : []
    const normalized = list.map((x) => ({ code: x.code, name: x.name }))

    const q = origem.trim().toLowerCase()
    if (!q) return normalized.slice(0, 12)
    return normalized.filter((a) => `${a.code} ${a.name}`.toLowerCase().includes(q)).slice(0, 12)
  }, [opt.citiesByCountry, selectedCountry, origem])

  // ===== DESTINO =====
  const destinoSuggestions = useMemo(() => {
    const list = opt.destinations || []
    const q = destino.trim().toLowerCase()
    if (!q) return list.slice(0, 8)
    return list.filter((a) => `${a.code} ${a.name}`.toLowerCase().includes(q)).slice(0, 8)
  }, [opt.destinations, destino])

  // Fecha dropdown quando clicar fora / ESC
  useEffect(() => {
    const onDocDown = (e) => {
      const t = e.target
      const insideOrigem = origemRootRef.current && origemRootRef.current.contains(t)
      const insideDestino = destinoRootRef.current && destinoRootRef.current.contains(t)
      if (!insideOrigem && !insideDestino) setOpenField(null)
    }
    const onKey = (e) => {
      if (e.key === "Escape") setOpenField(null)
    }
    document.addEventListener("mousedown", onDocDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDocDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  const swap = () => {
    setOrigem(destino)
    setDestino(origem)
    setOpenField(null)
  }

  const submit = () => {
    const payload = {
      tab,
      tripType,
      origem,
      destino,
      dataIda,
      ...(tripType === "idaVolta" ? { dataVolta } : {}),
      usarMilhas,
      passageiros: { adults, children, total: adults + children },
    }
    console.log("SUBMIT DESKTOP:", payload)
    return payload
  }

  const openOrigem = () => {
    setOpenField("origem")
    setOrigemStep("country")
    setSelectedCountry(null)
  }

  return (
    <section className="hidden md:block bg-slate-50 pb-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-visible">
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

            {opt.error && (
              <div className="mt-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-[14px] text-red-700">
                {opt.error}
              </div>
            )}

            {/* ===== VOOS ===== */}
            {tab === "voos" && (
              <>
                <div className="mt-6 flex items-center gap-8">
                  <Radio active={tripType === "soIda"} onClick={() => setTripType("soIda")}>
                    Só ida
                  </Radio>
                  <Radio active={tripType === "idaVolta"} onClick={() => setTripType("idaVolta")}>
                    Ida e volta
                  </Radio>
                </div>

                <div className="mt-5 grid grid-cols-12 gap-5 items-end">
                  {/* Origem/Destino */}
                  <div className="col-span-12 lg:col-span-5">
                    <div className="relative h-14 rounded-xl border border-slate-300 bg-white flex">
                      {/* ORIGEM */}
                      <div className="relative flex-1" ref={origemRootRef}>
                        <input
                          aria-label="Origem"
                          type="text"
                          value={origem}
                          onChange={(e) => {
                            setOrigem(e.target.value)
                            setOpenField("origem")
                          }}
                          onFocus={openOrigem}
                          onClick={openOrigem}
                          placeholder={opt.loading ? "Carregando..." : "Origem"}
                          disabled={opt.loading}
                          autoComplete="off"
                          className="h-14 w-full px-5 pr-10 text-[18px] text-[#1B2F5B] placeholder:text-slate-300 outline-none rounded-l-xl"
                        />

                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <svg className="h-5 w-5 opacity-70" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path
                              d="M5 7.5L10 12.5L15 7.5"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        {openField === "origem" && !opt.loading && (
                          <>
                            {origemStep === "country" && (
                              <SuggestList
                                header="Selecione um país"
                                items={origemCountrySuggestions}
                                emptyText="Nenhum país encontrado"
                                onPick={(c) => {
                                  if (c.code === "BR") {
                                    setSelectedCountry("BR")
                                    setOrigemStep("city")
                                    setOrigem("")
                                    return
                                  }
                                  setOrigem(`${c.name} - ${c.code}`)
                                  setOpenField(null)
                                }}
                              />
                            )}

                            {origemStep === "city" && (
                              <SuggestList
                                header="Brasil"
                                onBack={() => {
                                  setOrigemStep("country")
                                  setSelectedCountry(null)
                                  setOrigem("")
                                }}
                                items={origemCitySuggestions}
                                emptyText="Nenhuma cidade encontrada"
                                onPick={(city) => {
                                  setOrigem(`${city.name} - ${city.code}`)
                                  setOpenField(null)
                                }}
                              />
                            )}
                          </>
                        )}
                      </div>

                      <div className="w-px bg-slate-300" />

                      {/* DESTINO */}
                      <div className="relative flex-1" ref={destinoRootRef}>
                        <input
                          aria-label="Destino"
                          type="text"
                          value={destino}
                          onChange={(e) => {
                            setDestino(e.target.value)
                            setOpenField("destino")
                          }}
                          onFocus={() => setOpenField("destino")}
                          onClick={() => setOpenField("destino")}
                          placeholder={opt.loading ? "Carregando..." : "Destino"}
                          disabled={opt.loading}
                          autoComplete="off"
                          className="h-14 w-full px-5 pr-10 text-[18px] text-[#1B2F5B] placeholder:text-slate-300 outline-none rounded-r-xl"
                        />

                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <svg className="h-5 w-5 opacity-70" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path
                              d="M5 7.5L10 12.5L15 7.5"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        {openField === "destino" && !opt.loading && (
                          <SuggestList
                            header="Selecione um destino"
                            items={destinoSuggestions}
                            emptyText="Nenhum destino encontrado"
                            onPick={(a) => {
                              setDestino(`${a.code} - ${a.name}`)
                              setOpenField(null)
                            }}
                          />
                        )}
                      </div>

                      {/* círculo swap no meio */}
                      <button
                        type="button"
                        onClick={swap}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-slate-300 bg-white grid place-items-center text-slate-500 hover:bg-slate-50"
                        aria-label="Trocar origem e destino"
                      >
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M7 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path
                            d="M15 5l3 3-3 3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path d="M17 16H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path
                            d="M9 19l-3-3 3-3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Datas custom (alinhadas e proporcionais) */}
                  <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                    <DatePickerField label="Data de ida" valueISO={dataIda} onChangeISO={setDataIda} minISO={null} placeholder="Selecionar" />
                  </div>

                  {tripType === "idaVolta" && (
                    <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                      <DatePickerField label="Data de volta" valueISO={dataVolta} onChangeISO={setDataVolta} minISO={dataIda || null} placeholder="Selecionar" />
                    </div>
                  )}

                  {/* Passageiros (Adultos/Crianças) */}
                  <div className="col-span-12 lg:col-span-3">
                    <PassengerField
                      adults={adults}
                      children={children}
                      onChange={({ adults: a, children: c }) => {
                        setAdults(a)
                        setChildren(c)
                      }}
                    />
                  </div>
                </div>

                {/* Checkbox */}
                <button type="button" onClick={() => setUsarMilhas((v) => !v)} className="mt-6 flex items-center gap-4 text-[#1B2F5B]">
                  <span className={cn("h-4 w-4 rounded-sm border", usarMilhas ? "border-[#00A8C6] bg-[#00A8C6]" : "border-slate-400 bg-white")} />
                  <span className="text-[20px]">Usar milhas AAdvantage®</span>
                </button>

                {/* Rodapé */}
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
                      onClick={submit}
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

            {/* ===== HOTÉIS ===== */}
            {tab === "hoteis" && (
              <>
                <h2 className="mt-7 text-[28px] font-semibold text-[#1B2F5B]">Encuentra el alojamiento perfecto</h2>

                <div className="mt-8 grid grid-cols-12 gap-5 items-end">
                  <div className="col-span-12 lg:col-span-5">
                    <label className="block text-[#1B2F5B] text-[18px] mb-2">Destino</label>
                    <div className="h-14 rounded-xl border border-slate-300 px-5 text-slate-300 flex items-center text-[18px]">Destino</div>
                  </div>

                  <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                    <label className="block text-[#1B2F5B] text-[18px] mb-2">Llegada</label>
                    <div className="h-14 rounded-xl border border-slate-300 px-5 flex items-center justify-between text-slate-300 text-[18px]">
                      Llegada <IconCalendar className="opacity-40" />
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                    <label className="block text-[#1B2F5B] text-[18px] mb-2">Salida</label>
                    <div className="h-14 rounded-xl border border-slate-300 px-5 flex items-center justify-between text-slate-300 text-[18px]">
                      Salida <IconCalendar className="opacity-40" />
                    </div>
                  </div>

                  <div className="col-span-12 sm:col-span-6 lg:col-span-1">
                    <label className="block text-[#1B2F5B] text-[18px] mb-2">Habitaciones</label>
                    <div className="h-14 rounded-xl border border-slate-300 px-5 flex items-center text-slate-300 text-[18px]">Habitaciones</div>
                  </div>

                  <div className="col-span-12 sm:col-span-6 lg:col-span-2">
                    <label className="block text-[#1B2F5B] text-[18px] mb-2">Adultos</label>
                    <div className="h-14 rounded-xl border border-slate-300 px-5 flex items-center text-slate-300 text-[18px]">Adultos</div>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between">
                  <div className="text-[#1B2F5B] text-[18px]">
                    Gestionado por <span className="font-bold text-[26px] text-[#003580]">Booking.com</span>
                  </div>

                  <button type="button" className="h-14 px-10 rounded-full bg-[#B3262E] text-white text-[22px] font-medium inline-flex items-center gap-3">
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
