'use client'

import { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <section id="video" className="relative px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Атмосфера вечера</p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
            Как это выглядит вживую
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Один короткий фрагмент передаёт больше, чем страница текста — энергию, эмоции и настроение,
            которое остаётся с гостями надолго.
          </p>
        </Reveal>

        <Reveal delay={120} className="relative mx-auto mt-12 max-w-md">
          <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-primary/25 blur-3xl" />
          <div className="group relative overflow-hidden rounded-[1.6rem] border border-border shadow-2xl">
            <video
              ref={videoRef}
              className="aspect-[9/16] w-full object-cover"
              src= "https://github.com/egorundr/kosmokolya/releases/download/v1.0/rancho.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/60 to-transparent p-4">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? 'Пауза' : 'Играть'}
                className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:scale-105"
              >
                {playing ? <Pause className="size-5" /> : <Play className="size-5 fill-current" />}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? 'Включить звук' : 'Выключить звук'}
                className="flex size-11 items-center justify-center rounded-full glass text-foreground transition hover:text-primary"
              >
                {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
