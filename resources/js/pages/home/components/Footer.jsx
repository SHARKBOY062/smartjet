import React from "react"

function cn(...xs) {
  return xs.filter(Boolean).join(" ")
}

/* ===================== ICONS (SVG) ===================== */
function IconEnvelope({ className = "" }) {
  return (
    <svg className={cn("h-6 w-6", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 8l6 5 6-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconArrowRight({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 7l5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconTwitter({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19.5 7.2c.01.2.01.4.01.6 0 6.1-4.7 10.4-10.4 10.4-2.1 0-4-.6-5.6-1.6 1.1.1 2.8 0 4-1-1.3-.1-2.4-1-2.8-2.3.2 0 .8 0 1.3-.1-1.4-.3-2.4-1.6-2.4-3.1.4.2 1.2.4 1.6.4-1.2-.8-1.6-2.5-.8-3.7 1.4 1.7 3.6 2.8 5.9 2.9-.4-1.6.8-3.2 2.5-3.2.8 0 1.5.3 2 .9.6-.1 1.2-.3 1.7-.6-.2.6-.6 1.1-1.2 1.4.5-.1 1-.2 1.5-.4-.3.5-.7 1-1.2 1.4Z"
        fill="currentColor"
      />
    </svg>
  )
}

function IconFacebook({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 8.5V7.2c0-.7.2-1.1 1.2-1.1H16V4h-1.7C12.4 4 11 5.2 11 7.1v1.4H9v2.3h2V20h3v-9.2h2.1l.4-2.3H14Z"
        fill="currentColor"
      />
    </svg>
  )
}

function IconYouTube({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 12s0-3.3-.4-4.8c-.2-.8-.9-1.5-1.7-1.7C17.3 5 12 5 12 5s-5.3 0-6.9.5c-.8.2-1.5.9-1.7 1.7C3 8.7 3 12 3 12s0 3.3.4 4.8c.2.8.9 1.5 1.7 1.7 1.6.5 6.9.5 6.9.5s5.3 0 6.9-.5c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.8.4-4.8Z"
        fill="currentColor"
      />
      <path d="M10.5 9.8v4.4l3.9-2.2-3.9-2.2Z" fill="#fff" />
    </svg>
  )
}

function IconInstagram({ className = "" }) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 2.8h9A4.7 4.7 0 0 1 21.2 7.5v9A4.7 4.7 0 0 1 16.5 21.2h-9A4.7 4.7 0 0 1 2.8 16.5v-9A4.7 4.7 0 0 1 7.5 2.8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M17.1 6.9h.01" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

/* ===== Payment Logos (SVG) ===== */
function VisaLogo() {
  return (
    <svg className="h-7" viewBox="0 0 120 40" fill="none" aria-hidden="true">
      <rect width="120" height="40" rx="8" fill="transparent" />
      <path
        d="M22 29 28 11h6l-8 18h-4Zm20 0-3-18h5l3 18h-5Zm-9 0-3-18h5l3 18h-5Z"
        fill="#1A3D8F"
      />
      <path
        d="M76 27.5c-1.7 1.2-4 2-6.8 2-4.1 0-7.2-1.8-7.2-5 0-1.9 1.2-3.3 3.8-4.3l3.1-1.1c1.3-.5 1.8-.8 1.8-1.3 0-.6-.8-1-2.1-1-1.7 0-3.5.5-5 1.4l-.7-3.6c1.8-.9 4.2-1.5 6.6-1.5 3.8 0 6.7 1.8 6.7 4.9 0 1.8-1 3.1-3.6 4.2l-3.2 1.2c-1.4.5-1.9.9-1.9 1.4 0 .7.9 1.1 2.4 1.1 1.9 0 3.8-.6 5.3-1.7l.8 3.7Z"
        fill="#1A3D8F"
      />
    </svg>
  )
}

function MasterCardLogo() {
  return (
    <svg className="h-7" viewBox="0 0 120 40" fill="none" aria-hidden="true">
      <rect width="120" height="40" rx="8" fill="transparent" />
      <circle cx="54" cy="20" r="12" fill="#EA001B" />
      <circle cx="66" cy="20" r="12" fill="#F79E1B" fillOpacity="0.95" />
      <path
        d="M60 11c2.8 2.2 4.6 5.6 4.6 9s-1.8 6.8-4.6 9c-2.8-2.2-4.6-5.6-4.6-9s1.8-6.8 4.6-9Z"
        fill="#FF5F00"
      />
      <text x="88" y="24" fontSize="12" fontFamily="Arial, sans-serif" fill="#1B2F5B">
        Mastercard
      </text>
    </svg>
  )
}

function DinersLogo() {
  return (
    <svg className="h-7" viewBox="0 0 120 40" fill="none" aria-hidden="true">
      <rect width="120" height="40" rx="8" fill="transparent" />
      <circle cx="28" cy="20" r="12" fill="#0B4DBA" />
      <circle cx="28" cy="20" r="8" fill="#fff" />
      <path d="M28 12a8 8 0 0 1 0 16V12Z" fill="#0B4DBA" />
      <text x="52" y="24" fontSize="12" fontFamily="Arial, sans-serif" fill="#1B2F5B">
        Diners Club
      </text>
    </svg>
  )
}

/* ===== Small badges row (inline SVG so nunca “quebra”) ===== */
function FooterBadge({ children }) {
  return (
    <div className="h-8 px-3 rounded-full border border-slate-200 bg-white text-[12px] text-slate-600 inline-flex items-center">
      {children}
    </div>
  )
}

function FooterCol({ title, items, moreLabel = "Ver más" }) {
  return (
    <div className="min-w-0">
      <h4 className="text-[#1B2F5B] font-semibold text-[15px]">{title}</h4>
      <ul className="mt-3 space-y-1.5 text-[14px] text-slate-600">
        {items.map((t) => (
          <li key={t}>
            <a href="#" className="hover:text-slate-900">
              {t}
            </a>
          </li>
        ))}
      </ul>
      <a href="#" className="mt-3 inline-block text-[14px] text-slate-600 italic hover:text-slate-900">
        {moreLabel}
      </a>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-8">
        {/* ===================== Newsletter (barra azul) ===================== */}
        <div className="pt-10">
          <div className="rounded-2xl bg-[#1B2F5B] px-6 py-6 md:px-8 md:py-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              {/* left */}
              <div className="flex items-center gap-4 min-w-0 md:w-[360px]">
                <div className="h-14 w-14 rounded-full border border-white/45 grid place-items-center text-white">
                  <IconEnvelope className="h-7 w-7" />
                </div>
                <div className="min-w-0 text-white">
                  <p className="text-[14px] text-white/70 leading-tight">Seja o primeiro a saber</p>
                  <p className="text-[18px] md:text-[20px] font-semibold leading-tight">
                    dos nossos descontos!
                  </p>
                </div>
              </div>

              {/* center: input */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center">
                    <input
                      type="email"
                      placeholder="Correio eletrónico"
                      className={cn(
                        "w-full",
                        "h-12 md:h-12",
                        "rounded-lg bg-white",
                        "px-4",
                        "text-[14px] text-slate-900 placeholder:text-slate-400",
                        "outline-none"
                      )}
                    />

                    <button
                      type="button"
                      className={cn(
                        "shrink-0",
                        "h-12 rounded-full",
                        "bg-[#00A8C6] text-white",
                        "px-6",
                        "text-[13px] font-semibold tracking-wide",
                        "inline-flex items-center gap-3 justify-center"
                      )}
                    >
                      INSCREVA-SE
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/60">
                        <IconArrowRight className="h-4 w-4" />
                      </span>
                    </button>
                  </div>

                  <p className="text-[12px] text-white/55">
                    Digite seu email e conheça primeiro nossas ofertas.{" "}
                    <a href="#" className="text-white/85 underline underline-offset-2">
                      Política de privacidade
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== Payments + Social ===================== */}
        <div className="mt-10 grid gap-8 border-b border-slate-200 pb-8 lg:grid-cols-2 lg:items-start">
          {/* payment */}
          <div>
            <h4 className="text-[#1B2F5B] font-semibold text-[15px]">Métodos de pagamento</h4>
            <div className="mt-4 flex items-center gap-6">
              <VisaLogo />
              <MasterCardLogo />
              <DinersLogo />
            </div>
          </div>

          {/* social */}
          <div className="lg:justify-self-end">
            <h4 className="text-[#1B2F5B] font-semibold text-[15px] lg:text-right">Siga-nos</h4>
            <div className="mt-4 flex items-center gap-3 lg:justify-end">
              {[
                { Icon: IconTwitter, label: "Twitter" },
                { Icon: IconFacebook, label: "Facebook" },
                { Icon: IconYouTube, label: "YouTube" },
                { Icon: IconInstagram, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="h-9 w-9 rounded-md bg-[#1B2F5B] text-white grid place-items-center"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===================== Link columns ===================== */}
        <div className="mt-8 grid gap-8 border-b border-slate-200 pb-8 md:grid-cols-2 lg:grid-cols-4">
          <FooterCol
            title="JetSMART"
            items={[
              "Quem somos",
              "Nosso Modelo",
              "Destinos",
              "Aliança American Airlines",
              "Programa AAdvantage®",
              "Troque de milhas AAdvantage®",
            ]}
          />
          <FooterCol
            title="Precisa Ajuda?"
            items={[
              "Centro de Ajuda",
              "Perguntas Frequentes",
              "Reservas em Grupo",
              "Devoluções",
              "Devoluções e trocas",
              "Estado do voo",
            ]}
          />
          <FooterCol
            title="Transparência"
            items={[
              "Condições do Contrato de Transporte",
              "Regulamentos Particulares",
              "Direitos do Passageiro",
              "Política de Privacidade JetSMART Airlines",
              "Política de Privacidade American Airlines",
              "Términos y Condiciones programa AAdvantage®",
            ]}
          />
          <FooterCol title="Trabalhe Conosco" items={["Aplique-se"]} moreLabel="" />
        </div>

        {/* ===================== Bottom row ===================== */}
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-[14px] text-slate-700">© {new Date().getFullYear()} JetSMART Brasil</div>

          {/* “selos” no centro (no print aparecem ícones pequeninos) */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:flex-1">
            <FooterBadge>Segurança</FooterBadge>
            <FooterBadge>Pagamento</FooterBadge>
            <FooterBadge>AAdvantage®</FooterBadge>
            <FooterBadge>Parceiros</FooterBadge>
          </div>

          {/* logo direita */}
          <div className="flex justify-end md:justify-end">
            <img
              src="/logo/logosamrtjett.svg"
              alt="JetSMART"
              className="h-8 w-auto select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
