'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { Lightbox } from '@/components/lightbox'

const PHOTOS = [
  '/gallery/g1.jpg',
  '/gallery/g2.jpg',
  '/gallery/g3.jpg',
  '/gallery/g4.jpg',
  '/gallery/g5.jpg',
  '/gallery/g6.jpg',
  '/gallery/g7.jpg',
  '/gallery/g8.jpg',
  '/gallery/g9.jpg',
  '/gallery/g10.jpg',
  '/gallery/g11.jpg',
  '/gallery/g12.jpg',
]

export function Gallery() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="gallery" className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Моменты</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
              Живые эмоции с праздников
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-muted-foreground">
            Свадьбы, юбилеи и корпоративы разного масштаба — от камерных до больших торжеств.
          </p>
        </Reveal>

        <div className="mt-12 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {PHOTOS.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 90} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(src)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-border"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src || '/placeholder.svg'}
                  alt={`Ведущий Николай на мероприятии — фото ${i + 1}`}
                  loading="lazy"
                  className="w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox src={active} alt="Фото с мероприятия" onClose={() => setActive(null)} />
    </section>
  )
}
