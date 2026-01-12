import React from "react"

function cn(...xs) {
  return xs.filter(Boolean).join(" ")
}

/* ===== ÍCONES (SVG) — sem emoji ===== */
function IconUsers({ className = "" }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M6 20a6 6 0 0 1 12 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7.5 11a2.5 2.5 0 1 1-3 2.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 20a4.5 4.5 0 0 1 5-4.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16.5 11a2.5 2.5 0 1 0 3 2.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 20a4.5 4.5 0 0 0-5-4.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconHelp({ className = "" }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 12a8.5 8.5 0 0 1-8.5 8.5H8l-5 2 2-5v-5.5A8.5 8.5 0 1 1 21 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 9.2A2.6 2.6 0 0 1 12 7.8c1.3 0 2.5.9 2.5 2.3 0 1.8-2 1.9-2 3.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M12 16.8h.01" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  )
}

function IconEntertainment({ className = "" }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 10h10l-1 10H8L7 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 10V8a3 3 0 0 1 6 0v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 10h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 14h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconPlane({ className = "" }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2.5 12.5l7.6 1.6 4.3 6.7 2-1.1-2.6-6.1 6.8 1.4c.8.2 1.5-.4 1.5-1.2 0-.6-.4-1.1-1-1.2l-6.8-1.4 3.4-5.8-2-1.1-5 5-7.6-1.6c-.7-.1-1.3.4-1.3 1.1 0 .6.4 1.1 1 1.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function IconChevronRight({ className = "" }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function QuickCard({ icon, title }) {
  return (
    <button
      type="button"
      className={cn(
        "w-full",
        "rounded-2xl bg-white",
        "border border-slate-200",
        "shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
        "px-6 py-5",
        "flex items-center justify-between",
        "hover:bg-slate-50 transition"
      )}
    >
      <div className="flex items-center gap-4">
        <span className="h-11 w-11 rounded-full bg-slate-100 grid place-items-center text-[#1B2F5B]">
          {icon}
        </span>
        <span className="text-[18px] font-medium text-[#1B2F5B]">{title}</span>
      </div>

      <span className="text-[#1B2F5B]">
        <IconChevronRight />
      </span>
    </button>
  )
}

export default function Cards() {
  // exatamente 4 cards como no print
  const items = [
    { title: "Grupos", icon: <IconUsers /> },
    { title: "Centro de Ajuda", icon: <IconHelp /> },
    { title: "Entretenimento", icon: <IconEntertainment /> },
    { title: "Quem Somos", icon: <IconPlane /> },
  ]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {items.map((it, i) => (
            <QuickCard key={i} title={it.title} icon={it.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
