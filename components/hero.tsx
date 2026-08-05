'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, ArrowUpRight, X } from 'lucide-react'
import { CONTACTS } from '@/lib/site'

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false)
  const modalVideoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
      const v = modalVideoRef.current
      if (v) {
        v.muted = false
        v.currentTime = 0
        v.play().catch(() => {})
      }
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalOpen])

  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Современный ведущий · свадьбы · юбилеи · корпоративы
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Праздник, <span className="text-gradient">который запоминают</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Николай Семченков — ведущий нового формата. Лёгкая атмосфера, живые эмоции и сценарий,
            собранный под вас. Гости включаются сами, а вы просто наслаждаетесь своим вечером.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACTS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Записаться
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-7 py-4 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
            >
              <Play className="size-4 fill-current" />
              Смотреть видео-визитку
            </button>
          </div>
        </div>

        {/* right — host photo */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-primary/25 blur-3xl" />
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            aria-label="Смотреть видео-визитку"
            className="group relative block w-full overflow-hidden rounded-[1.6rem] border border-border shadow-2xl"
          >
            <img
              className="aspect-[4/5] w-full object-cover object-top sm:aspect-[3/4]"
              src="/hero.jpg"
              alt="Ведущий Николай Семченков"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full glass px-4 py-2 text-sm text-foreground">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition group-hover:scale-110">
                <Play className="size-4 fill-current" />
              </span>
              Смотреть визитку
            </span>
          </button>
        </div>
      </div>

      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Видео-визитка"
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
        >
          <button
            type="button"
            aria-label="Закрыть"
            onClick={() => setModalOpen(false)}
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:bg-primary hover:text-primary-foreground"
          >
            <X className="size-5" />
          </button>
          <video
            ref={modalVideoRef}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-auto max-w-[92vw] rounded-2xl shadow-2xl"
            src="/media/vizitka.mp4"
            controls
            autoPlay
            playsInline
          />
        </div>
      )}
    </section>
  )
}
