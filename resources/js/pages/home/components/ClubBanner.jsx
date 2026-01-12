import React from "react"

export default function ClubBanner() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="space-y-8">
          {/* Banner grande (1.webp) */}
          <img
            src="/banner/1.webp"
            alt=""
            className="block w-full h-auto rounded-2xl select-none"
            draggable={false}
          />

          {/* Dois banners (2.webp e 3.webp) */}
          <div className="grid gap-6 lg:grid-cols-2">
            <img
              src="/banner/2.webp"
              alt=""
              className="block w-full h-auto rounded-2xl select-none"
              draggable={false}
            />

            <img
              src="/banner/3.webp"
              alt=""
              className="block w-full h-auto rounded-2xl select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
