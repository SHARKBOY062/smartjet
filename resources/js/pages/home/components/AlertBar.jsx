import React, { useState } from "react"

export default function AlertBar() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className="bg-rose-600 text-white text-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        <p>
          Aviso operacional: planeje sua chegada com antecedência para horários de pico.
        </p>
        <button onClick={() => setOpen(false)} className="font-bold">✕</button>
      </div>
    </div>
  )
}
