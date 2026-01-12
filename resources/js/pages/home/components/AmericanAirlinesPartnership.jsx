import React from "react"

function cn(...xs) {
  return xs.filter(Boolean).join(" ")
}

/* ===== ÍCONES (SVG) — sem emoji ===== */
function IconTitle({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 8h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ArrowRight({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PartnerCard({ img, title, desc }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Imagem (mesmo tamanho em todos os cards) */}
      <div className="aspect-[16/9] w-full bg-slate-50">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover select-none"
          draggable={false}
        />
      </div>

      {/* Conteúdo */}
      <div className="px-8 py-6 text-center">
        {/* sem “negrito pesado” */}
        <h3 className="text-[22px] font-semibold text-[#1B2F5B]">{title}</h3>
        <p className="mt-2 text-[16px] leading-relaxed text-slate-600">{desc}</p>

        <div className="mt-6 h-px bg-slate-200" />

        <button
          type="button"
          className={cn(
            "mt-4 w-full",
            "inline-flex items-center justify-center gap-2",
            "text-[#00A8C6] text-[18px] font-medium"
          )}
        >
          Ver mais <ArrowRight className="text-[#00A8C6]" />
        </button>
      </div>
    </article>
  )
}

export default function AmericanAirlinesPartnership() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Cabeçalho (sem negrito pesado no título) */}
        <div className="flex items-center gap-5">
          <span className="h-14 w-[4px] bg-[#00A8C6]" />

          <div className="flex items-center gap-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#00A8C6] text-[#00A8C6]">
              <IconTitle />
            </span>

            <h2 className="text-[28px] md:text-[34px] font-semibold text-slate-900">
              Explore mais com a parceria da JetSMART com a American Airlines
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <PartnerCard
            img="/banner/Alianza.webp"
            title="Descubra nossa parceria"
            desc="JetSMART e American Airlines se unem para oferecer novos benefícios."
          />
          <PartnerCard
            img="/banner/Acumulacion_BR.webp"
            title="Acumulação de milhas"
            desc="Obtenha milhas com seus voos e melhore sua experiência de viagem."
          />
          <PartnerCard
            img="/banner/Canje_BR.webp"
            title="Resgate de milhas"
            desc="Resgate suas milhas AAdvantage® por voos da JetSMART em JetSMART.com."
          />
        </div>
      </div>
    </section>
  )
}
