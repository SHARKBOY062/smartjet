import React, { useState } from "react"

export default function AlertBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="bg-rose-600 text-white text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        <p>
          Devido à alta temporada nos aeroportos do Rio de Janeiro, Foz do Iguaçu e Recife, planeje sua chegada com antecedência: 3 horas antes para voos nacionais e 4 horas para voos internacionais.
        </p>
        <button onClick={() => setOpen(false)} className="font-bold">✕</button>
      </div>
    </div>
  )
}
