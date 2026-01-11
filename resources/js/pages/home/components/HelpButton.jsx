import React from "react"

export default function HelpButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button className="flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-lg border">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-white">
          💬
        </span>
        <span className="text-sm font-semibold">Precisa de ajuda?</span>
      </button>
    </div>
  )
}
