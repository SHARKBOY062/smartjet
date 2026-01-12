import React, { useMemo, useState } from "react"

function cn(...xs) {
  return xs.filter(Boolean).join(" ")
}

/* ===== ÍCONES (SVG) ===== */
function IconPlaneCheck({ className = "" }) {
  return (
    <svg className={cn("h-8 w-8", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 10l7-3 2 2 7-2 2 2-7 3-2-2-7 2-2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M7 21l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 21l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 3l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconArrowPill({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconChevronDown({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconChevronUp({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 15l-6-6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconClipboard({ className = "" }) {
  return (
    <svg className={cn("h-8 w-8", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 4h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M9 4a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M10 2h4a1.5 1.5 0 0 1 1.5 1.5V5h-7V3.5A1.5 1.5 0 0 1 10 2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconPaw({ className = "" }) {
  return (
    <svg className={cn("h-8 w-8", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 13.5c-1.7 0-3 1.3-3 3 0 1.1.7 2.1 1.8 2.6 1.2.6 2.6.4 3.6-.4.5-.4 1.2-.7 2.1-.7s1.6.3 2.1.7c1 .8 2.4 1 3.6.4 1.1-.5 1.8-1.5 1.8-2.6 0-1.7-1.3-3-3-3-1.2 0-2.2.6-2.7 1.5-.5.8-1.2 1.2-1.8 1.2s-1.3-.4-1.8-1.2c-.5-.9-1.5-1.5-2.7-1.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.5c0 1.1-.7 2-1.6 2S4.8 10.6 4.8 9.5 5.5 7.5 6.4 7.5 8 8.4 8 9.5Z"
        fill="currentColor"
      />
      <path
        d="M12 8.5c0 1.2-.7 2.2-1.7 2.2S8.6 9.7 8.6 8.5 9.3 6.3 10.3 6.3 12 7.3 12 8.5Z"
        fill="currentColor"
      />
      <path
        d="M15.4 8.5c0 1.2-.7 2.2-1.7 2.2S12 9.7 12 8.5 12.7 6.3 13.7 6.3 15.4 7.3 15.4 8.5Z"
        fill="currentColor"
      />
      <path
        d="M19.2 9.5c0 1.1-.7 2-1.6 2S16 10.6 16 9.5s.7-2 1.6-2 1.6.9 1.6 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function IconTicket({ className = "" }) {
  return (
    <svg className={cn("h-8 w-8", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 9h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 13h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconPlane({ className = "" }) {
  return (
    <svg className={cn("h-8 w-8", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.5 12.5l7.6 1.6 4.3 6.7 2-1.1-2.6-6.1 6.8 1.4c.8.2 1.5-.4 1.5-1.2 0-.6-.4-1.1-1-1.2l-6.8-1.4 3.4-5.8-2-1.1-5 5-7.6-1.6c-.7-.1-1.3.4-1.3 1.1 0 .6.4 1.1 1 1.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function IconWheelchair({ className = "" }) {
  return (
    <svg className={cn("h-8 w-8", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" fill="currentColor" />
      <path d="M10 8v6a3 3 0 0 0 3 3h3l2 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 21a5 5 0 1 0 0-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 11h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconCalendarCheck({ className = "" }) {
  return (
    <svg className={cn("h-8 w-8", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3v3M17 3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M8 16l2 2 4-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ===== ITEM ===== */
function StepItem({ icon, title, desc, linkLabel }) {
  return (
    <div className="min-w-0">
      <div className="h-14 w-14 rounded-lg bg-[#00A8C6] grid place-items-center text-white">
        {icon}
      </div>

      <h4 className="mt-4 text-[#1B2F5B] font-extrabold text-[16px] tracking-wide uppercase">
        {title}
      </h4>

      <p className="mt-3 text-[16px] leading-relaxed text-[#1B2F5B]/70 max-w-[480px]">
        {desc}
      </p>

      <button type="button" className="mt-5 text-[#00A8C6] text-[16px] underline underline-offset-2">
        {linkLabel}
      </button>
    </div>
  )
}

export default function TravelSteps() {
  const [expanded, setExpanded] = useState(false)

  const items = useMemo(
    () => [
      {
        icon: <IconClipboard />,
        title: "FAÇA SEU CHECK-IN",
        desc: "A partir de 72 horas antes do seu voo, acesse nosso site e confirme sua viagem. Economize o custo adicional de fazê-lo no aeroporto.",
        link: "O que é Check-In?",
      },
      {
        icon: <IconPaw />,
        title: "COMO LEVAR SEU ANIMAL DE ESTIMAÇÃO A BORDO",
        desc: "Não deixe seu animal de estimação em casa e leve-o com você para onde for!",
        link: "Conheça os requisitos",
      },
      {
        icon: <IconTicket />,
        title: "RECEBA SEU CARTÃO DE EMBARQUE",
        desc: "Enviamos o cartão por e-mail. Apresente-o em seu celular ou imprima-o em casa.",
        link: "Cartão de embarque",
      },
      {
        icon: <IconPlane />,
        title: "REQUISITOS PARA VIAJAR",
        desc: "Quais documentos preciso para voar? Verifique as restrições de viagem.",
        link: "Conheça os requisitos",
      },
      {
        icon: <IconWheelchair />,
        title: "COMO SOLICITAR ASSISTÊNCIA ESPECIAL",
        desc: "Você tem alguma deficiência ou necessidades especiais? Solicite assistência.",
        link: "Como solicitar assistência",
      },
      {
        icon: <IconCalendarCheck />,
        title: "MODIFIQUE SUA RESERVA",
        desc: "Encontre tudo o que você precisa para fazer Alterações e/ou Reembolsos",
        link: "Saiba mais",
      },
    ],
    []
  )

  const visible = expanded ? items : items.slice(0, 3)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-4">
            <span className="mt-1 h-14 w-1 bg-[#00A8C6]" />

            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="text-[#00A8C6] shrink-0">
                  <IconPlaneCheck className="h-7 w-7 sm:h-8 sm:w-8" />
                </span>

                <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] leading-tight font-semibold text-black">
                  Sua viagem começa agora, passo a passo.
                </h2>
              </div>

              <p className="mt-2 text-[16px] sm:text-[18px] text-[#1B2F5B]/55">
                Contamos tudo o que você precisa saber para voar com a JetSMART pelo menor preço
              </p>
            </div>
          </div>

          {/* Botão topo (fica ao lado no desktop e desce no mobile) */}
          <button
            type="button"
            className={cn(
              "w-full lg:w-auto",
              "inline-flex items-center justify-center gap-3",
              "rounded-full border-2 border-[#1B2F5B]",
              "px-5 py-3",
              "text-[#1B2F5B] text-[16px] sm:text-[18px] font-medium",
              "bg-white"
            )}
          >
            Todas as suas perguntas
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1B2F5B]">
              <IconArrowPill className="text-[#1B2F5B]" />
            </span>
          </button>
        </div>

        {/* Caixa branca */}
        <div className="mt-8 sm:mt-10 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100">
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="grid gap-x-12 gap-y-10 lg:grid-cols-3">
              {visible.map((it, idx) => (
                <StepItem key={idx} icon={it.icon} title={it.title} desc={it.desc} linkLabel={it.link} />
              ))}
            </div>

            {/* Toggle */}
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center gap-3 text-[#1B2F5B] text-[18px] font-medium"
              >
                {expanded ? "Ver menos" : "Ver mais"}
                {expanded ? <IconChevronUp /> : <IconChevronDown />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
