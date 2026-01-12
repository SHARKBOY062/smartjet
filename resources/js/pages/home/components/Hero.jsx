import React from "react"

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
      <path d="M3.5 7h.01M3.5 12h.01M3.5 17h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
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
function MobileTopTab({ active, icon, children }) {
  return (
    <button
      type="button"
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

function MobileInnerTab({ active, children }) {
  return (
    <button
      type="button"
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

function Radio({ active, children }) {
  return (
    <label className="inline-flex items-center gap-3 text-[14px] text-[#1B2F5B]">
      <span
        className={cn(
          "h-6 w-6 rounded-full border-[3px] border-[#1B2F5B] grid place-items-center",
          active && "after:block after:h-3 after:w-3 after:rounded-full after:bg-[#1B2F5B]"
        )}
      />
      {children}
    </label>
  )
}

export default function Hero() {
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
            {/* mais “estreito” */}
            <div className="mx-auto max-w-[360px]">
              {/* top tabs */}
              <div className="flex items-center gap-3">
                <MobileTopTab active icon={<IconPlane className="h-4 w-4" />}>
                  Voos
                </MobileTopTab>

                <MobileTopTab icon={<IconDoc className="h-4 w-4" />}>
                  Minha reserva
                </MobileTopTab>
              </div>

              {/* CARD (~50% menor) */}
              <div className="mt-4 rounded-[20px] bg-white border border-slate-200 overflow-hidden shadow-[0_14px_40px_rgba(0,0,0,0.14)]">
                <div className="p-4">
                  {/* tabs internos */}
                  <div className="flex items-center gap-3">
                    <MobileInnerTab active>Voos</MobileInnerTab>
                    <MobileInnerTab>Hotéis</MobileInnerTab>
                    <MobileInnerTab>Realocação</MobileInnerTab>
                  </div>

                  {/* radios */}
                  <div className="mt-5 flex items-center gap-8">
                    <Radio>Só ida</Radio>
                    <Radio active>Ida e volta</Radio>
                  </div>

                  {/* inputs */}
                  <div className="mt-5 rounded-2xl border border-slate-200 overflow-hidden">
                    <input
                      aria-label="Origem"
                      type="text"
                      className="w-full px-4 py-4 text-[16px] text-[#1B2F5B] placeholder:text-slate-300 outline-none"
                      placeholder="Origem"
                    />
                    <div className="h-px bg-slate-200" />
                    <div className="relative">
                      <input
                        aria-label="Destino"
                        type="text"
                        className="w-full px-4 py-4 text-[16px] text-[#1B2F5B] placeholder:text-slate-300 outline-none"
                        placeholder="Destino"
                      />

                      {/* swap menor */}
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border-2 border-slate-200 bg-white grid place-items-center text-slate-500">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M8 7l-3 3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M5 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M16 17l3-3-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M19 14H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* checkbox */}
                  <div className="mt-5 flex items-center gap-3 text-[14px] text-[#1B2F5B]">
                    <span className="h-6 w-6 rounded-md border-2 border-slate-300 bg-white" />
                    Usar milhas AAdvantage®
                  </div>

                  {/* link */}
                  <button
                    type="button"
                    className="mt-6 w-full text-center text-[14px] font-semibold text-[#1B2F5B] underline"
                  >
                    ↻ Refazer minha última busca
                  </button>

                  {/* botão */}
                  <button
                    type="button"
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
                        <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
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
                  <Pill active icon={<IconPlane className="h-5 w-5" />}>Voos</Pill>
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
